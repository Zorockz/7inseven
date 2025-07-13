import { timeCapsuleService } from './timeCapsuleService';

/**
 * Utility class for immediate time capsule delivery
 */
export class DeliveryUtils {
  
  /**
   * Deliver all time capsules that are ready for delivery
   */
  static async deliverAllReadyCapsules() {
    try {
      console.log('🚀 [DeliveryUtils] Starting immediate delivery for all ready capsules...');
      const result = await timeCapsuleService.deliverTimeCapsulesImmediately();
      console.log(`✅ [DeliveryUtils] Delivery complete: ${result.delivered} emails sent`);
      return result;
    } catch (error) {
      console.error('❌ [DeliveryUtils] Error delivering capsules:', error);
      throw error;
    }
  }

  /**
   * Deliver a specific time capsule by ID
   */
  static async deliverSpecificCapsule(timeCapsuleId: string) {
    try {
      console.log(`🎯 [DeliveryUtils] Starting immediate delivery for capsule: ${timeCapsuleId}`);
      const result = await timeCapsuleService.deliverSpecificTimeCapsule(timeCapsuleId);
      
      if (result.success) {
        console.log(`✅ [DeliveryUtils] Specific capsule delivered: ${result.delivered} emails sent`);
      } else {
        console.log(`⚠️ [DeliveryUtils] Failed to deliver specific capsule:`, result.errors);
      }
      
      return result;
    } catch (error) {
      console.error('❌ [DeliveryUtils] Error delivering specific capsule:', error);
      throw error;
    }
  }

  /**
   * Check if a time capsule is ready for delivery
   */
  static async isCapsuleReadyForDelivery(timeCapsuleId: string): Promise<boolean> {
    try {
      return await timeCapsuleService.isTimeCapsuleReadyForDelivery(timeCapsuleId);
    } catch (error) {
      console.error('❌ [DeliveryUtils] Error checking capsule readiness:', error);
      return false;
    }
  }

  /**
   * Get all time capsules ready for delivery
   */
  static async getReadyCapsules() {
    try {
      return await timeCapsuleService.getTimeCapsulesReadyForDelivery();
    } catch (error) {
      console.error('❌ [DeliveryUtils] Error getting ready capsules:', error);
      throw error;
    }
  }

  /**
   * Trigger delivery via API endpoint
   */
  static async triggerDeliveryViaAPI(timeCapsuleId?: string) {
    try {
      const response = await fetch('/api/immediate-delivery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeCapsuleId })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('❌ [DeliveryUtils] Error triggering delivery via API:', error);
      throw error;
    }
  }
}

/**
 * Hook for React components to trigger immediate delivery
 */
export const useImmediateDelivery = () => {
  const deliverAll = async () => {
    try {
      return await DeliveryUtils.deliverAllReadyCapsules();
    } catch (error) {
      console.error('Error in deliverAll hook:', error);
      throw error;
    }
  };

  const deliverSpecific = async (timeCapsuleId: string) => {
    try {
      return await DeliveryUtils.deliverSpecificCapsule(timeCapsuleId);
    } catch (error) {
      console.error('Error in deliverSpecific hook:', error);
      throw error;
    }
  };

  const isReady = async (timeCapsuleId: string) => {
    try {
      return await DeliveryUtils.isCapsuleReadyForDelivery(timeCapsuleId);
    } catch (error) {
      console.error('Error in isReady hook:', error);
      return false;
    }
  };

  return {
    deliverAll,
    deliverSpecific,
    isReady,
    getReadyCapsules: DeliveryUtils.getReadyCapsules,
    triggerDeliveryViaAPI: DeliveryUtils.triggerDeliveryViaAPI
  };
}; 