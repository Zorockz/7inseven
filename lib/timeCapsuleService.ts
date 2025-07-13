import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc,
  doc,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import nodemailer from 'nodemailer';

export interface TimeCapsule {
  id?: string;
  message: string;
  emails: string[];
  deliveryDate: Date;
  createdAt: Date;
  isDelivered: boolean;
}

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email template for time capsule messages
const createEmailTemplate = (timeCapsule: TimeCapsule) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Your Time Capsule Message Has Arrived! ⏰</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .message-box { background: white; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
        .message-text { font-style: italic; font-size: 18px; line-height: 1.6; color: #555; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .timestamp { background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 15px 0; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⏰ Your Time Capsule Message Has Arrived!</h1>
          <p>A message from your past self has reached its destination</p>
        </div>
        
        <div class="content">
          <div class="timestamp">
            <strong>Sent on:</strong> ${timeCapsule.createdAt.toLocaleDateString()} at ${timeCapsule.createdAt.toLocaleTimeString()}<br>
            <strong>Delivered on:</strong> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </div>
          
          <div class="message-box">
            <div class="message-text">${timeCapsule.message}</div>
          </div>
          
          <p style="text-align: center; margin-top: 30px;">
            <em>"The best time to plant a tree was 20 years ago. The second best time is now."</em>
          </p>
        </div>
        
        <div class="footer">
          <p>Sent with ❤️ from TimeSend</p>
          <p>Your personal time capsule service</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const timeCapsuleService = {
  // Create a new time capsule
  async createTimeCapsule(timeCapsule: Omit<TimeCapsule, 'id' | 'createdAt' | 'isDelivered'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'timeCapsules'), {
        ...timeCapsule,
        createdAt: Timestamp.now(),
        isDelivered: false,
        deliveryDate: Timestamp.fromDate(timeCapsule.deliveryDate)
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating time capsule:', error);
      throw new Error('Failed to create time capsule');
    }
  },

  // Get time capsules for a specific email
  async getTimeCapsulesByEmail(email: string): Promise<TimeCapsule[]> {
    try {
      const q = query(
        collection(db, 'timeCapsules'),
        where('emails', 'array-contains', email),
        where('isDelivered', '==', false)
      );
      
      const querySnapshot = await getDocs(q);
      const timeCapsules: TimeCapsule[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        timeCapsules.push({
          id: doc.id,
          message: data.message,
          emails: data.emails,
          deliveryDate: data.deliveryDate.toDate(),
          createdAt: data.createdAt.toDate(),
          isDelivered: data.isDelivered
        });
      });
      
      return timeCapsules;
    } catch (error) {
      console.error('Error getting time capsules:', error);
      throw new Error('Failed to get time capsules');
    }
  },

  // Mark a time capsule as delivered
  async markAsDelivered(timeCapsuleId: string): Promise<void> {
    try {
      const docRef = doc(db, 'timeCapsules', timeCapsuleId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error marking time capsule as delivered:', error);
      throw new Error('Failed to mark time capsule as delivered');
    }
  },

  // Get time capsules ready for delivery
  async getTimeCapsulesReadyForDelivery(): Promise<TimeCapsule[]> {
    try {
      const now = new Date();
      const q = query(
        collection(db, 'timeCapsules'),
        where('deliveryDate', '<=', Timestamp.fromDate(now)),
        where('isDelivered', '==', false)
      );
      
      const querySnapshot = await getDocs(q);
      const timeCapsules: TimeCapsule[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        timeCapsules.push({
          id: doc.id,
          message: data.message,
          emails: data.emails,
          deliveryDate: data.deliveryDate.toDate(),
          createdAt: data.createdAt.toDate(),
          isDelivered: data.isDelivered
        });
      });
      
      return timeCapsules;
    } catch (error) {
      console.error('Error getting time capsules ready for delivery:', error);
      throw new Error('Failed to get time capsules ready for delivery');
    }
  },

  // In-house function to deliver time capsules immediately
  async deliverTimeCapsulesImmediately(): Promise<{
    delivered: number;
    totalCapsules: number;
    errors: string[];
  }> {
    try {
      console.log('🕐 Starting immediate time capsule delivery...');
      
      // Get time capsules ready for delivery
      const timeCapsules = await this.getTimeCapsulesReadyForDelivery();
      
      console.log(`📦 Found ${timeCapsules.length} time capsules ready for delivery`);

      if (timeCapsules.length === 0) {
        return {
          delivered: 0,
          totalCapsules: 0,
          errors: []
        };
      }

      let deliveredCount = 0;
      const errors: string[] = [];
      const transporter = createTransporter();

      for (const timeCapsule of timeCapsules) {
        if (!timeCapsule.id) continue;

        console.log(`📧 Processing time capsule ${timeCapsule.id} for immediate delivery`);

        // Send email to each recipient
        for (const email of timeCapsule.emails) {
          try {
            console.log(`📤 Sending email to ${email}...`);

            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: email,
              subject: "⏰ Your Time Capsule Message Has Arrived!",
              html: createEmailTemplate(timeCapsule)
            };

            // Send the email
            const info = await transporter.sendMail(mailOptions);
            
            console.log(`✅ Email sent successfully to ${email}:`, info.messageId);
            deliveredCount++;

          } catch (error) {
            const errorMessage = `Failed to send email to ${email}: ${error instanceof Error ? error.message : 'Unknown error'}`;
            console.error(`❌ ${errorMessage}`);
            errors.push(errorMessage);
          }
        }

        // Mark as delivered (delete from database)
        try {
          await this.markAsDelivered(timeCapsule.id);
          console.log(`✅ Time capsule ${timeCapsule.id} marked as delivered`);
        } catch (error) {
          const errorMessage = `Failed to mark time capsule ${timeCapsule.id} as delivered: ${error instanceof Error ? error.message : 'Unknown error'}`;
          console.error(`❌ ${errorMessage}`);
          errors.push(errorMessage);
        }
      }

      console.log(`🎉 Immediate delivery complete! ${deliveredCount} emails sent`);

      return {
        delivered: deliveredCount,
        totalCapsules: timeCapsules.length,
        errors
      };
      
    } catch (error) {
      console.error('❌ Error processing immediate time capsule delivery:', error);
      throw new Error(`Failed to process immediate delivery: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Check if a specific time capsule is ready for delivery
  async isTimeCapsuleReadyForDelivery(timeCapsuleId: string): Promise<boolean> {
    try {
      const now = new Date();
      const q = query(
        collection(db, 'timeCapsules'),
        where('__name__', '==', timeCapsuleId),
        where('deliveryDate', '<=', Timestamp.fromDate(now)),
        where('isDelivered', '==', false)
      );
      
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking if time capsule is ready for delivery:', error);
      return false;
    }
  },

  // Deliver a specific time capsule immediately
  async deliverSpecificTimeCapsule(timeCapsuleId: string): Promise<{
    success: boolean;
    delivered: number;
    errors: string[];
  }> {
    try {
      // Check if the time capsule is ready for delivery
      const isReady = await this.isTimeCapsuleReadyForDelivery(timeCapsuleId);
      
      if (!isReady) {
        return {
          success: false,
          delivered: 0,
          errors: ['Time capsule is not ready for delivery yet']
        };
      }

      // Get the specific time capsule
      const timeCapsules = await this.getTimeCapsulesReadyForDelivery();
      const targetCapsule = timeCapsules.find(capsule => capsule.id === timeCapsuleId);
      
      if (!targetCapsule) {
        return {
          success: false,
          delivered: 0,
          errors: ['Time capsule not found or already delivered']
        };
      }

      let deliveredCount = 0;
      const errors: string[] = [];
      const transporter = createTransporter();

      console.log(`📧 Processing specific time capsule ${timeCapsuleId} for immediate delivery`);

      // Send email to each recipient
      for (const email of targetCapsule.emails) {
        try {
          console.log(`📤 Sending email to ${email}...`);

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "⏰ Your Time Capsule Message Has Arrived!",
            html: createEmailTemplate(targetCapsule)
          };

          // Send the email
          const info = await transporter.sendMail(mailOptions);
          
          console.log(`✅ Email sent successfully to ${email}:`, info.messageId);
          deliveredCount++;

        } catch (error) {
          const errorMessage = `Failed to send email to ${email}: ${error instanceof Error ? error.message : 'Unknown error'}`;
          console.error(`❌ ${errorMessage}`);
          errors.push(errorMessage);
        }
      }

      // Mark as delivered
      try {
        await this.markAsDelivered(timeCapsuleId);
        console.log(`✅ Time capsule ${timeCapsuleId} marked as delivered`);
      } catch (error) {
        const errorMessage = `Failed to mark time capsule ${timeCapsuleId} as delivered: ${error instanceof Error ? error.message : 'Unknown error'}`;
        console.error(`❌ ${errorMessage}`);
        errors.push(errorMessage);
      }

      return {
        success: true,
        delivered: deliveredCount,
        errors
      };
      
    } catch (error) {
      console.error('❌ Error processing specific time capsule delivery:', error);
      return {
        success: false,
        delivered: 0,
        errors: [`Failed to process delivery: ${error instanceof Error ? error.message : 'Unknown error'}`]
      };
    }
  }
}; 