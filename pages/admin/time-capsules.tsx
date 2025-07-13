import { useState, useEffect } from 'react';
import { timeCapsuleService, TimeCapsule } from '@/lib/timeCapsuleService';

export default function TimeCapsuleAdmin() {
  const [pendingCapsules, setPendingCapsules] = useState<TimeCapsule[]>([]);
  const [loading, setLoading] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<string>('');

  useEffect(() => {
    loadPendingCapsules();
  }, []);

  const loadPendingCapsules = async () => {
    try {
      setLoading(true);
      // Get all time capsules (we'll filter for pending ones on the client side)
      const capsules = await timeCapsuleService.getTimeCapsulesByEmail('admin@example.com');
      const now = new Date();
      const pending = capsules.filter(capsule => 
        capsule.deliveryDate <= now && !capsule.isDelivered
      );
      setPendingCapsules(pending);
    } catch (error) {
      console.error('Error loading pending capsules:', error);
    } finally {
      setLoading(false);
    }
  };

  const triggerDelivery = async () => {
    try {
      setLoading(true);
      setDeliveryStatus('Triggering delivery...');

      const response = await fetch('/api/manual-delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        setDeliveryStatus(`✅ Delivery completed! ${result.delivered} emails sent`);
        // Reload pending capsules
        await loadPendingCapsules();
      } else {
        setDeliveryStatus(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error triggering delivery:', error);
      setDeliveryStatus('❌ Failed to trigger delivery');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            ⏰ Time Capsule Admin Panel
          </h1>

          {/* Manual Delivery Trigger */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Manual Delivery Trigger
            </h2>
            <p className="text-gray-600 mb-4">
              Click the button below to manually trigger delivery of all time capsules that are ready.
            </p>
            <button
              onClick={triggerDelivery}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? 'Processing...' : '🚀 Trigger Delivery Now'}
            </button>
            {deliveryStatus && (
              <div className="mt-4 p-3 rounded-lg bg-gray-100">
                <p className="text-sm">{deliveryStatus}</p>
              </div>
            )}
          </div>

          {/* Pending Time Capsules */}
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Pending Time Capsules ({pendingCapsules.length})
            </h2>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading...</p>
              </div>
            ) : pendingCapsules.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No pending time capsules found.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingCapsules.map((capsule, index) => (
                  <div key={capsule.id || index} className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-800">
                        Time Capsule #{capsule.id?.slice(-8) || index + 1}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {capsule.isDelivered ? '✅ Delivered' : '⏳ Pending'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Message:</strong>
                        <p className="text-gray-700 mt-1 italic">"{capsule.message}"</p>
                      </div>
                      <div>
                        <strong>Recipients:</strong>
                        <p className="text-gray-700 mt-1">{capsule.emails.join(', ')}</p>
                      </div>
                      <div>
                        <strong>Created:</strong>
                        <p className="text-gray-700 mt-1">{formatDate(capsule.createdAt)}</p>
                      </div>
                      <div>
                        <strong>Delivery Date:</strong>
                        <p className="text-gray-700 mt-1">{formatDate(capsule.deliveryDate)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* System Information */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              System Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Automated Delivery:</strong>
                <p className="text-gray-700 mt-1">Every 6 hours via Vercel Cron</p>
              </div>
              <div>
                <strong>Email Service:</strong>
                <p className="text-gray-700 mt-1">Gmail (via Nodemailer)</p>
              </div>
              <div>
                <strong>Database:</strong>
                <p className="text-gray-700 mt-1">Firebase Firestore</p>
              </div>
              <div>
                <strong>Current Time:</strong>
                <p className="text-gray-700 mt-1">{new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 