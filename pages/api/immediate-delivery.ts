import { NextApiRequest, NextApiResponse } from 'next';
import { timeCapsuleService } from '@/lib/timeCapsuleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { timeCapsuleId } = req.body;

    // If a specific time capsule ID is provided, deliver that one
    if (timeCapsuleId) {
      console.log(`🎯 Processing immediate delivery for specific time capsule: ${timeCapsuleId}`);
      
      const result = await timeCapsuleService.deliverSpecificTimeCapsule(timeCapsuleId);
      
      if (result.success) {
        res.status(200).json({
          message: 'Time capsule delivered successfully',
          delivered: result.delivered,
          errors: result.errors,
          timestamp: new Date().toISOString()
        });
      } else {
        res.status(400).json({
          message: 'Failed to deliver time capsule',
          delivered: result.delivered,
          errors: result.errors,
          timestamp: new Date().toISOString()
        });
      }
    } else {
      // Deliver all time capsules ready for delivery
      console.log('🚀 Processing immediate delivery for all ready time capsules');
      
      const result = await timeCapsuleService.deliverTimeCapsulesImmediately();
      
      res.status(200).json({
        message: 'Time capsule delivery processed',
        delivered: result.delivered,
        totalCapsules: result.totalCapsules,
        errors: result.errors,
        timestamp: new Date().toISOString()
      });
    }
    
  } catch (error) {
    console.error('❌ Error in immediate delivery API:', error);
    res.status(500).json({ 
      message: 'Internal server error during immediate delivery',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
  }
} 