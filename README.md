# CloudScale Final Project

**Prepared by:**
* Sabreen Ashraf Alzwi - Student ID: [4836]
* Retaj Abraheem ben fadhl - Student ID: [4804]
* Rahaf Gadri Mohammed - Student ID: [4872]

**Instructor:** M.Sc. Abdelhakim Rashid  
**Academic Year:** 2025-2026

---

## Project Description

CloudScale is a growing startup that aims to deploy a scalable, containerized web application on Microsoft Azure without the need to manually manage virtual machines.

This project was implemented using Kubernetes, Docker, Terraform, Azure Kubernetes Service (AKS), Azure Container Registry (ACR), and GitHub Actions to create a fully automated DevOps pipeline.

The implemented solution includes:
* A custom Node.js-based web application that displays a personalized message including the names of Sabreen, Retaj, and Rahaf, along with a health check endpoint (`/health`) for monitoring purposes.
* A Docker image built from the application and pushed to Azure Container Registry (ACR) for secure and efficient storage.
* Terraform configuration files that provision the required Azure infrastructure, including a Resource Group, Azure Container Registry, and an Azure Kubernetes Service (AKS) cluster.
* Kubernetes deployment and service manifests that define the application deployment with multiple replicas, enable load balancing, and ensure high availability using a LoadBalancer service.
* Health monitoring using Kubernetes readiness and liveness probes configured on the `/health` endpoint to ensure application reliability and automatic recovery.
* A GitHub Actions CI/CD workflow that automates the process of building, testing, and pushing the Docker image, and deploying the application to AKS upon changes to the main branch.
* A manual approval gate configured using the GitHub production environment to ensure controlled deployment to production.
* Secure Azure authentication using a Service Principal stored in GitHub Secrets to enable seamless and protected access to Azure resources.

This solution demonstrates a complete DevOps lifecycle, from code development to automated deployment on a managed Kubernetes platform, ensuring scalability, reliability, and minimal operational overhead.

---

## Setup Instructions

### 1. Docker Setup
1. Build the Docker image:
   docker build -t cloudscale-app .
2. Run the Docker container locally:
   docker run -p 3000:3000 cloudscale-app.
3. Verify the application is running by visiting:
   http://localhost:3000
4. Verify the health endpoint:
  http://localhost:3000/health

### 2. Terraform Setup
1. Initialize Terraform:
   terraform init
2. Review the execution plan:
   terraform plan
3. Create Azure resources:
   terraform apply  
   ##This creates: Azure Resource Group, Azure Container Registry (ACR), Azure Kubernetes Service (AKS)
  
### 3. Kubernetes Setup
1. Deploy the application:
   kubectl apply -f k8s/
2. Check running pods:
   kubectl get pods
3. Check services:
   kubectl get svc
4. Check cluster nodes:
   kubectl get nodes

   
## GitHub Actions Workflow Explanation
The project uses GitHub Actions to automate the Continuous Integration and Continuous Deployment (CI/CD) process.

Whenever code is pushed to the main branch, GitHub Actions automatically starts the workflow. The workflow builds the Docker image, authenticates with Microsoft Azure using GitHub Secrets, pushes the Docker image to Azure Container Registry (ACR), and waits for manual approval before deploying the latest image to Azure Kubernetes Service (AKS).

The manual approval gate ensures that deployments to the production environment only occur after explicit approval, providing an additional layer of safety and control. This automated workflow reduces manual effort, improves deployment consistency, and ensures reliable application delivery.



## Step-by-Step Solution

Step 1 – Develop the Web Application: A Node.js web application was created with a custom homepage displaying the names of the project members. A /health endpoint was also implemented for Kubernetes health checks.

Step 2 – Containerize the Application: A Dockerfile was created to package the application into a Docker image. The image was successfully built and tested locally.

Step 3 – Provision Azure Infrastructure: Terraform was used to provision the Azure Resource Group, Azure Container Registry (ACR), and Azure Kubernetes Service (AKS) cluster automatically.

Step 4 – Configure Kubernetes: Kubernetes Deployment and Service manifests were created. The deployment runs three replicas of the application, while the LoadBalancer service exposes the application externally.

Step 5 – Configure Health Probes: Readiness and Liveness probes were configured to monitor the /health endpoint, allowing Kubernetes to detect unhealthy containers and restart them automatically when necessary.

Step 6 – Configure GitHub Secrets: Azure credentials were appropriately configured to enable secure workflows.

Step 8 – Configure Manual Approval Gate: A GitHub Environment with required reviewers was configured to require manual approval before production deployment.

Step 9 – Deploy the Application: After approval, GitHub Actions deployed the latest Docker image to Azure Kubernetes Service, where Kubernetes created three running replicas of the application.

Step 10 – Verify Deployment: The deployment was verified by checking the Docker image in ACR, Terraform deployment success, Kubernetes nodes, running pods, GitHub Actions workflow, manual approval gate, Azure Portal resources, and the application running successfully in the browser.
