import { NextApiRequest, NextApiResponse } from 'next';
import { timeCapsuleService } from '@/lib/timeCapsuleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message, emails, deliveryDate } = req.body;

    // Validate required fields
    if (!message || !emails || !deliveryDate) {
      return res.status(400).json({ 
        message: 'Missing required fields: message, emails, deliveryDate' 
      });
    }

    // Validate message
    if (typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ 
        message: 'Message is required and cannot be empty' 
      });
    }

    // Validate emails
    if (!Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ 
        message: 'At least one email address is required' 
      });
    }

    // Validate delivery date
    const deliveryDateObj = new Date(deliveryDate);
    if (isNaN(deliveryDateObj.getTime())) {
      return res.status(400).json({ 
        message: 'Invalid delivery date' 
      });
    }

    // Create time capsule
    const capsuleId = await timeCapsuleService.createTimeCapsule({
      message: message.trim(),
      emails: emails.filter(email => email.trim()),
      deliveryDate: deliveryDateObj
    });

    res.status(200).json({ 
      message: 'Time capsule created successfully',
      capsuleId
    });
  } catch (error) {
    console.error('Error creating time capsule:', error);
    res.status(500).json({ 
      message: 'Error creating time capsule',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 