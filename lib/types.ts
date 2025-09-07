// Core API Request Types
export interface SelectModelRequest {
  model_id: string
  output_dir: string
  quantization?: string
}

export interface PrepareDataRequest {
  input_file: string
  output_dir?: string
  task: "unsupervised" | "supervised" | "instruction"
  augment?: boolean
  balance?: boolean
  test_size?: number
  max_length?: number
}

export interface FineTuneRequest {
  base_model_dir: string
  dataset_dir: string
  output_dir?: string
  ft_type: string
  peft_method: string
  alignment: string
  epochs: number
  batch_size: number
  learning_rate: number
  gradient_accumulation_steps: number
  max_seq_length: number
  reasoning_effort?: string
}

// Core API Response Types
export interface ApiResponse {
  status: "success" | "error" | "started" | "running" | "completed" | "cancellation_requested"
  message: string
  model_path?: string
  train_path?: string
  val_path?: string
  task_id?: string
  eval_results?: Record<string, any>
  optimization_info?: Record<string, any>
  optimization_summary?: Record<string, any>
}

export interface HealthResponse {
  status: string
  service: string
  version?: string
  endpoints?: string[]
}

// Training and Status Types
export interface TrainingStatus {
  task_id: string
  status: "running" | "completed" | "error" | "cancelling" | "cancelled" | "started"
  message?: string
  progress: string
  current_epoch?: number
  total_epochs?: number
  current_step?: number
  total_steps?: number
  loss?: number
  eval_loss?: number
  learning_rate?: number
  progress_percentage?: number
  started_at?: string
  updated_at?: string
  estimated_completion?: string
  estimated_remaining_minutes?: number
  logs?: string[]
  model_path?: string
  eval_results?: Record<string, any>
}

export interface ActiveSession {
  task_id: string
  status: string
  started_at: string
  request_data: any
  last_activity: string
  current_status?: TrainingStatus
}

export interface ActiveSessionsResponse {
  status: string
  active_sessions: Record<string, ActiveSession>
  total_active: number
}

// Model Management Types
export interface ModelInfo {
  model_id: string
  local_name: string
  path: string
  status: "available" | "downloading" | "error"
  size_mb: number
  files: string[]
  has_tokenizer: boolean
  architecture?: string
  model_type?: string
}

export interface AvailableModelsResponse {
  status: "success" | "error"
  models: ModelInfo[]
  models_directory: string
  total_models: number
  message?: string
}

// Chat and Comparison Types
export interface ChatModelPair {
  pair_id: string
  base_model_name: string
  adapter_name: string
  base_model_size_mb: number
  adapter_size_mb: number
  estimated_memory_mb: number
  status: string
  load_time_ms?: number
}

export interface ChatModelPairsResponse {
  status: "success" | "error"
  model_pairs: ChatModelPair[]
}

export interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
  timestamp: string
  model_type?: "base" | "finetuned"
}

export interface ChatSession {
  session_id: string
  session_name: string
  pair_id: string
  model_info: {
    base_model: string
    adapter_name: string
  }
  created_at: string
  last_activity: string
  message_count: number
  status: string
}

export interface ChatSessionsResponse {
  status: "success" | "error"
  sessions: ChatSession[]
}

export interface CreateChatSessionRequest {
  pair_id: string
  session_name?: string
}

export interface CreateChatSessionResponse {
  status: "success" | "error"
  session: ChatSession
  message?: string
}

export interface ChatSessionHistoryResponse {
  status: "success" | "error"
  messages: ChatMessage[]
}

export interface GenerationParams {
  max_new_tokens: number
  temperature: number
  do_sample: boolean
  top_p: number
  top_k?: number
  repetition_penalty?: number
  length_penalty?: number
}

export interface GenerateChatRequest {
  session_id: string
  messages: ChatMessage[]
  generation_params: GenerationParams
}

export interface GenerateChatResponse {
  status: "success" | "error"
  response: {
    base_response: string
    finetuned_response: string
    generation_time_ms: {
      base: number
      finetuned: number
      total: number
    }
    model_info: {
      base_model: string
      adapter_name: string
      pair_id: string
    }
    cache_metrics: {
      cache_hits: number
      cache_misses: number
    }
    session_id: string
    timestamp: string
  }
}

// Logging and Monitoring Types
export interface LogEntry {
  timestamp: string
  type: "info" | "training" | "success" | "error" | "warning" | "debug"
  message: string
  step?: number | null
  epoch?: number | null
  loss?: number | null
  learning_rate?: number | null
  progress_percentage?: number
  level?: "INFO" | "WARN" | "ERROR" | "DEBUG" | "TRAIN" | "UNKNOWN"
}

export interface MetricData {
  epoch: number
  step: number
  loss?: number
  eval_loss?: number
  learning_rate?: number
  timestamp?: string
}

// UI Component Types
export interface StatusCardProps {
  title: string
  status: "pending" | "running" | "completed" | "error"
  message?: string
  details?: Record<string, any>
}

export interface ProgressBarProps {
  progress: number
  label?: string
  className?: string
  showPercentage?: boolean
}

export interface LogViewerProps {
  logs: string[]
  title?: string
  maxHeight?: string
  isConnected?: boolean
  onReconnect?: () => void
}

export interface MetricsChartProps {
  data: MetricData[]
  title?: string
}

// Navigation and App State Types
export type NavigationPage = "home" | "training" | "workflow" | "docs" | "chat"

export interface AppState {
  currentPage: NavigationPage
  activeTab: "training" | "chat"
  apiStatus: "checking" | "online" | "offline"
  currentTaskId: string | null
  trainingStatus: TrainingStatus | null
  selectedModel: string | null
  selectedModelInfo: ModelInfo | null
  availableModels: ModelInfo[]
  isStreamConnected: boolean
}

// Error and Validation Types
export interface ValidationError {
  field: string
  message: string
  code?: string
}

export interface ApiError {
  status: "error"
  message: string
  details?: string
  validation_errors?: ValidationError[]
  timestamp?: string
}

// Configuration Types
export interface TrainingConfig {
  model: {
    model_id: string
    quantization: string
    output_dir: string
  }
  data: {
    input_file: string
    task: "unsupervised" | "supervised" | "instruction"
    augment: boolean
    balance: boolean
    test_size: number
    max_length: number
  }
  training: {
    ft_type: string
    peft_method: string
    alignment: string
    epochs: number
    batch_size: number
    learning_rate: number
    gradient_accumulation_steps: number
    max_seq_length: number
  }
}

export interface SystemInfo {
  gpu_available: boolean
  gpu_memory_mb?: number
  cpu_cores: number
  ram_mb: number
  disk_space_mb: number
  python_version: string
  torch_version?: string
  cuda_version?: string
}

// Workflow and Pipeline Types
export interface WorkflowStep {
  id: string
  name: string
  description: string
  status: "pending" | "running" | "completed" | "error" | "skipped"
  progress?: number
  started_at?: string
  completed_at?: string
  error_message?: string
  dependencies?: string[]
}

export interface Workflow {
  id: string
  name: string
  description: string
  steps: WorkflowStep[]
  status: "pending" | "running" | "completed" | "error"
  created_at: string
  updated_at: string
  total_progress: number
}

// Export utility types
export type LoadingState = Record<string, boolean>
export type ErrorState = Record<string, string | null>

// Type guards and utility functions
export const isTrainingStatus = (obj: any): obj is TrainingStatus => {
  return obj && typeof obj.task_id === "string" && typeof obj.status === "string"
}

export const isApiError = (obj: any): obj is ApiError => {
  return obj && obj.status === "error" && typeof obj.message === "string"
}

export const isModelInfo = (obj: any): obj is ModelInfo => {
  return obj && typeof obj.model_id === "string" && typeof obj.path === "string"
}

// Constants for type safety
export const TRAINING_STATUSES = ["running", "completed", "error", "cancelling", "cancelled", "started"] as const

export const LOG_LEVELS = ["INFO", "WARN", "ERROR", "DEBUG", "TRAIN", "UNKNOWN"] as const

export const PEFT_METHODS = ["qlora", "lora"] as const

export const ALIGNMENT_METHODS = ["none", "dpo", "ipo", "kto"] as const

export const QUANTIZATION_OPTIONS = ["none", "4bit", "8bit"] as const
