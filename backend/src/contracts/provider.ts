export interface Provider {
  register: () => void;
  boot?: () => void;
}
