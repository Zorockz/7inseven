import { NextApiRequest, NextApiResponse } from 'next';
import { timeCapsuleService } from '@/lib/timeCapsuleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.query;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ 
        message: 'Email parameter is required' 
      });
    }

    const capsules = await timeCapsuleService.getTimeCapsulesByEmail(email);

    res.status(200).json({ 
      message: 'Time capsules retrieved successfully',
      capsules
    });
  } catch (error) {
    console.error('Error getting time capsules:', error);
    res.status(500).json({ 
      message: 'Error getting time capsules',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 