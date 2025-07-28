declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    duration?: number;
    easing?: string;
    delay?: number;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}