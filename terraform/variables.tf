variable "location" {
  description = "Azure region"
  type        = string
  default     = "swedencentral"
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
  default     = "sabreen-rahaf-retaj-final-rg"
}

variable "acr_name" {
  description = "Azure Container Registry name"
  type        = string
  default     = "cloudscalesrracr2026"
}

variable "aks_cluster_name" {
  description = "AKS cluster name"
  type        = string
  default     = "cloudscale-srr-aks"
}

variable "student_name" {
  description = "Student names"
  type        = string
  default     = "Sabreen-Rahaf-Retaj"
}