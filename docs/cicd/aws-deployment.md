# Continuous Integration and Deployment with AWS

## Services Overview

- **GitHub** - Free!
- **GitHub Actions** Free!
- **AWS** - Free, but credit card required!

## GitHub Setup

![github setup](./images/github-setup.excalidraw.png)

### GitHub Actions

GitHub Actions uses YAML files to define workflows, which are automated sequences that execute one or more jobs. Each job consists of steps that run on the same runner, a virtual machine. These steps can execute commands, perform setup tasks, or run specific actions. GitHub Actions is built around four key concepts: triggers (when to run), jobs (what to do), steps (how to do it), and actions (reusable units of code).

#### Folder Structure

```bash
  project-root/
  ├── .github/
  │   └── workflows/
  │       └── main.yml
  └── (rest of your project files)
```

#### GitHub Actions Flow

![gha flow](./images/gha-flow.excalidraw.png)

## AWS Environment

**AWS Elastic Beanstalk** simplifies the deployment of Dockerized applications by managing infrastructure, scaling, and updates. Single or multi-container Docker environments can be deployed using a `Dockerfile` or `docker-compose.yml`. The service automates the provisioning of resources such as _EC2 instances_, _load balancers_, and auto-scaling groups.

![aws environment](./images/aws-env.excalidraw.png)

### Elastic Beanstalk Configuration

This guide provides step-by-step instructions for creating an Elastic Beanstalk environment. The process is divided into four critical sections:

1. **Creating EC2 Instance Profile**
2. **Elastic Beanstalk Environment Creation**
3. **S3 Bucket Configuration**

<details>
<summary>Setup Guide</summary>

#### 1. Creating EC2 IAM Instance Profile

1. Open the **AWS Management Console**.
2. Search for **IAM** and select the IAM service.
3. In the left sidebar, click **Roles** under **Access Management**.
4. Click **Create role**.
5. Under **Trusted entity type**, select **AWS Service**, then choose **EC2** under common use cases. Click **Next**.
6. Search for and select the following policies:
   - **AWSElasticBeanstalkWebTier**
   - **AWSElasticBeanstalkWorkerTier**
   - **AWSElasticBeanstalkMulticontainerDocker**
7. Click **Next**, name the role `aws-elasticbeanstalk-ec2-role`, and click **Create role**.

#### 2. Elastic Beanstalk Environment Creation

1. In the **AWS Management Console**, search for **Elastic Beanstalk** and open the service.
2. Click **Create Application** or **Create environment**, depending on the current dashboard view.
3. Provide an **Application name**, which will auto-populate the **Environment Name**.
4. In the **Platform** section, select **Docker** and change the **Platform branch** to **Docker running on 64bit Amazon Linux 2**.
5. Ensure that **free tier eligible** is selected under **Presets**, then click **Next**.
6. In the **Service Access** section, select **Create and use new service role** and name it `aws-elasticbeanstalk-service-role`. Set the **EC2 instance profile** to `aws-elasticbeanstalk-ec2-role`.
7. Click **Skip to Review**, then **Submit** to launch the environment.

#### 3. S3 Bucket Configuration

1. In the **AWS Management Console**, search for **S3** and open the service.
2. Locate the **elasticbeanstalk** bucket created with the environment.
3. Go to the **Permissions** tab.
4. Under **Object Ownership**, click **Edit**.
5. Change the settings to:
   - **ACLs enabled**
   - **Bucket owner Preferred**
   - **Object Writer**
6. Acknowledge the warning and click **Save changes**.

</details>
