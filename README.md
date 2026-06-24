# CloudScale Final Project

## Project Description

This project is a Cloud Computing and DevOps Engineering final project.

The goal of the project is to deploy a containerized web application to Microsoft Azure using DevOps best practices. The application is built using Node.js and Express, containerized with Docker, pushed to Azure Container Registry (ACR), deployed to Azure Kubernetes Service (AKS), and automated using GitHub Actions CI/CD with a manual approval gate before production deployment.

## Team Members

* Sabreen
* Rahaf
* Retaj

## Technologies Used

* Git and GitHub
* Node.js and Express
* Docker
* Azure Container Registry (ACR)
* Azure Kubernetes Service (AKS)
* Terraform
* Kubernetes
* GitHub Actions

## Project Architecture

The project follows this DevOps workflow:

Code → GitHub → GitHub Actions → Docker Image → Azure Container Registry → Azure Kubernetes Service → LoadBalancer → Browser

The developer pushes code to GitHub. GitHub Actions builds and tests the Docker image, pushes the image to Azure Container Registry, then deploys the updated image to Azure Kubernetes Service after manual approval.

## Main Project Components

* `app.js`: Node.js Express web application.
* `Dockerfile`: Builds the Docker image for the application.
* `package.json`: Contains application dependencies and scripts.
* `terraform/`: Contains Terraform files used to create Azure infrastructure.
* `k8s/deployment.yaml`: Kubernetes Deployment file with 3 replicas and health probes.
* `k8s/service.yaml`: Kubernetes LoadBalancer Service file.
* `.github/workflows/ci-cd.yml`: GitHub Actions CI/CD workflow.
* `.gitignore`: Prevents unnecessary or sensitive files from being pushed to GitHub.

## Application Features

The application includes:

* A custom homepage message with the team members’ names.
* A `/health` endpoint used for Kubernetes readiness and liveness probes.
* Display of the running Pod name to show that the application is running inside Kubernetes.

## Docker Setup

Build the Docker image locally:

```bash
docker build -t cloudscale-app:v1.0.0 .
```

Tag the image for Azure Container Registry:

```bash
docker tag cloudscale-app:v1.0.0 cloudscalesrracr2026.azurecr.io/cloudscale-app:v1.0.0
```

Push the image to ACR:

```bash
docker push cloudscalesrracr2026.azurecr.io/cloudscale-app:v1.0.0
```

## Terraform Setup

Navigate to the Terraform folder:

```bash
cd terraform
```

Initialize Terraform:

```bash
terraform init
```

Preview the infrastructure plan:

```bash
terraform plan
```

Apply the Terraform configuration:

```bash
terraform apply
```

Terraform creates the following Azure resources:

* Azure Resource Group
* Azure Container Registry with Basic SKU
* Azure Kubernetes Service cluster
* AKS and ACR integration for automatic image pull
* Required tags for the project

## Kubernetes Deployment

Get AKS credentials:

```bash
az aks get-credentials --resource-group sabreen-rahaf-retaj-final-rg --name cloudscale-srr-aks --overwrite-existing
```

Apply the Kubernetes Deployment:

```bash
kubectl apply -f k8s/deployment.yaml
```

Apply the Kubernetes Service:

```bash
kubectl apply -f k8s/service.yaml
```

Check the deployment:

```bash
kubectl get deployments
kubectl get pods
kubectl get service
```

The application is exposed using an Azure LoadBalancer public IP.

## GitHub Actions CI/CD

The GitHub Actions workflow automates the CI/CD process.

The workflow performs the following steps:

1. Builds and tests the Docker image.
2. Logs in to Azure using GitHub Secrets.
3. Logs in to Azure Container Registry.
4. Builds and pushes the Docker image to ACR.
5. Gets AKS credentials.
6. Updates the Kubernetes deployment image.
7. Waits for the Kubernetes rollout to complete.

The deployment job uses a `production` environment with a manual approval gate before deployment.

## GitHub Secrets Used

The workflow uses the following GitHub Secrets:

* `AZURE_CREDENTIALS`
* `ACR_NAME`
* `ACR_LOGIN_SERVER`
* `RESOURCE_GROUP`
* `AKS_CLUSTER_NAME`
* `IMAGE_NAME`

These secrets allow GitHub Actions to authenticate securely with Azure, ACR, and AKS without exposing sensitive credentials in the repository.

## Important Notes

ACR Tasks were not permitted in the Azure for Students subscription, so the Docker image was built locally and pushed to Azure Container Registry using Docker commands.

The required node size `Standard_B2s` was not allowed in the selected Azure region and student subscription, so the AKS node size was changed to `Standard_B2als_v2`, which was available in the subscription.

## Repository Link

https://github.com/sabreennajeeb-commits/cloudscale-final-project

## Cleanup

After completing the project and taking all required screenshots, Azure resources should be deleted to avoid unnecessary costs:

```bash
cd terraform
terraform destroy
```
