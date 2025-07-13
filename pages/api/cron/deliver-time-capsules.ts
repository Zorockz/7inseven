import { NextApiRequest, NextApiResponse } from 'next';
import { timeCapsuleService } from '@/lib/timeCapsuleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verify this is a legitimate cron request (optional security measure)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    console.log('🕐 [CRON] Starting automated time capsule delivery check...');
    
    // Use the new service method for immediate delivery
    const result = await timeCapsuleService.deliverTimeCapsulesImmediately();
    
    console.log(`📦 [CRON] Found ${result.totalCapsules} time capsules ready for delivery`);
    console.log(`🎉 [CRON] Delivery complete! ${result.delivered} emails sent`);

    if (result.errors.length > 0) {
      console.error(`❌ [CRON] Errors during delivery:`, result.errors);
    }

    res.status(200).json({ 
      message: 'Time capsule delivery processed successfully', 
      delivered: result.delivered,
      totalCapsules: result.totalCapsules,
      errors: result.errors,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ [CRON] Error processing time capsule delivery:', error);
    res.status(500).json({ 
      message: 'Internal server error during delivery processing',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
  }
} 