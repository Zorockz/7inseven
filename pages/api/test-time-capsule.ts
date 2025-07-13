import { NextApiRequest, NextApiResponse } from 'next';
import { timeCapsuleService } from '@/lib/timeCapsuleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('🧪 Testing time capsule service...');

    // Test creating a time capsule
    const testTimeCapsule = {
      message: "Test message from backend",
      emails: ["test@example.com"],
      deliveryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now
    };

    const capsuleId = await timeCapsuleService.createTimeCapsule(testTimeCapsule);
    console.log(`✅ Test time capsule created with ID: ${capsuleId}`);

    // Get the created time capsule
    const capsules = await timeCapsuleService.getTimeCapsulesByEmail("test@example.com");
    console.log(`📦 Found ${capsules.length} capsules for test email`);

    res.status(200).json({ 
      message: 'Time capsule service test completed!',
      testData: {
        capsuleId,
        message: testTimeCapsule.message,
        emails: testTimeCapsule.emails,
        deliveryDate: testTimeCapsule.deliveryDate,
        foundCapsules: capsules.length
      }
    });
  } catch (error) {
    console.error('❌ Error testing time capsule service:', error);
    res.status(500).json({ 
      message: 'Error testing time capsule service',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 