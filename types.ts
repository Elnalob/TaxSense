
/**
 * Represents a topic in the tax reform explainer.
 */
export interface ReformTopic {
  id: number;
  title: string;
  summary: string;
  details: string;
}

/**
 * Represents a benefit or incentive available to taxpayers.
 */
export interface Benefit {
  id: number;
  title:string;
  description: string;
  criteria: {
    isSelfEmployed?: boolean;
    isBusinessRegistered?: boolean;
  };
}
