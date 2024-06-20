export interface ProcessStepType {
    id: string;
    name: string;
}

export interface Process {
    id: string;
    name: string;
    steps: ProcessStepType[];
}
  