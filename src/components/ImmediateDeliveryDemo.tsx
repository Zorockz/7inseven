import React, { useState } from 'react';
import { useImmediateDelivery } from '@/lib/deliveryUtils';

interface DeliveryResult {
  delivered: number;
  totalCapsules?: number;
  errors: string[];
  success?: boolean;
}

export const ImmediateDeliveryDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DeliveryResult | null>(null);
  const [specificCapsuleId, setSpecificCapsuleId] = useState('');
  const [readyCapsules, setReadyCapsules] = useState<any[]>([]);

  const { deliverAll, deliverSpecific, getReadyCapsules } = useImmediateDelivery();

  const handleDeliverAll = async () => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const deliveryResult = await deliverAll();
      setResult(deliveryResult);
    } catch (error) {
      setResult({
        delivered: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeliverSpecific = async () => {
    if (!specificCapsuleId.trim()) {
      alert('Please enter a time capsule ID');
      return;
    }

    setIsLoading(true);
    setResult(null);
    
    try {
      const deliveryResult = await deliverSpecific(specificCapsuleId);
      setResult(deliveryResult);
    } catch (error) {
      setResult({
        delivered: 0,
        success: false,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetReadyCapsules = async () => {
    setIsLoading(true);
    
    try {
      const capsules = await getReadyCapsules();
      setReadyCapsules(capsules);
    } catch (error) {
      console.error('Error getting ready capsules:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">⏰ Immediate Time Capsule Delivery</h1>
        <p className="text-lg opacity-90">
          Send time capsules immediately when their delivery date is reached
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deliver All Ready Capsules */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            🚀 Deliver All Ready Capsules
          </h2>
          <p className="text-gray-600 mb-4">
            Send all time capsules that have reached their delivery date
          </p>
          <button
            onClick={handleDeliverAll}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            {isLoading ? '⏳ Processing...' : '📦 Deliver All Ready Capsules'}
          </button>
        </div>

        {/* Deliver Specific Capsule */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            🎯 Deliver Specific Capsule
          </h2>
          <p className="text-gray-600 mb-4">
            Send a specific time capsule by its ID
          </p>
          <input
            type="text"
            value={specificCapsuleId}
            onChange={(e) => setSpecificCapsuleId(e.target.value)}
            placeholder="Enter time capsule ID"
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleDeliverSpecific}
            disabled={isLoading || !specificCapsuleId.trim()}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            {isLoading ? '⏳ Processing...' : '📤 Deliver Specific Capsule'}
          </button>
        </div>
      </div>

      {/* Check Ready Capsules */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          📋 Check Ready Capsules
        </h2>
        <p className="text-gray-600 mb-4">
          View all time capsules that are ready for delivery
        </p>
        <button
          onClick={handleGetReadyCapsules}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isLoading ? '⏳ Loading...' : '🔍 Check Ready Capsules'}
        </button>

        {readyCapsules.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Ready Capsules ({readyCapsules.length}):
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {readyCapsules.map((capsule, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded border">
                  <div className="font-medium text-sm">ID: {capsule.id}</div>
                  <div className="text-sm text-gray-600">
                    Message: {capsule.message.substring(0, 50)}...
                  </div>
                  <div className="text-xs text-gray-500">
                    Emails: {capsule.emails.join(', ')}
                  </div>
                  <div className="text-xs text-gray-500">
                    Delivery Date: {capsule.deliveryDate.toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            📊 Delivery Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{result.delivered}</div>
              <div className="text-sm text-blue-600">Emails Sent</div>
            </div>
            
            {result.totalCapsules !== undefined && (
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{result.totalCapsules}</div>
                <div className="text-sm text-green-600">Total Capsules</div>
              </div>
            )}
            
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{result.errors.length}</div>
              <div className="text-sm text-red-600">Errors</div>
            </div>
          </div>

          {result.success !== undefined && (
            <div className={`p-3 rounded-lg mb-4 ${
              result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <strong>Status:</strong> {result.success ? '✅ Success' : '❌ Failed'}
            </div>
          )}

          {result.errors.length > 0 && (
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Errors:</h3>
              <ul className="space-y-1">
                {result.errors.map((error, index) => (
                  <li key={index} className="text-sm text-red-700">• {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 