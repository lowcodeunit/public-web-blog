---
title: PostgreSQL Database Storage and Azure 
author: Mike Gearhardt and Trevor Richardson
author_title: Product Owner @ Fathym
author_url: https://www.fathym.com
author_image_url: 
tags: [PostgreSQL, SQL, database, database storage, Azure, Microsoft, Microsoft Azure]
hide_table_of_contents: true
---

January 13, 2023 by Mike Gearhardt, _CTO @ Fathym_ and Trevor Richardson, _Fathym Architect @ Fathym_

![](https://www.fathym.com/img/databaseisometric.jpg) 


In this article: 

- Azure container instances are not usable to store PostgreSQL databases 
- Changing ownership is not supported with PostgreSQL 
- Azure Database is a better production deployment target for PostgreSQL storage 


## Azure Database for PostgreSQL storage advantages 

Azure provides a fully managed open-source database for PostgreSQL with up to 99.99 percent uptime, AI-powered performance optimization, and advanced security. However, different features of Azure need to be considered for storing your database. 

## Azure Container Instances is not a Solution 

Azure Container Instances (ACI) is a service provided by Microsoft Azure that allows users to easily run containers in the cloud without the need to manage any underlying infrastructure. 

Unfortunately, you can’t just use Azure Container Instances as a storage option for a PostgreSQL database.  

PostgreSQL requires the folder in which the volume is mounted to be owned by a different user, not the “root” user. Azure Container Instances must use Azure FileShares as their volume mounts, and these do NOT support the "chown" command for changing ownership. 

That’s why you can’t simply use Azure Container Instances as a storage option. 

While you could potentially use Azure Container Instances to host a PostgreSQL database by building a custom container image that includes PostgreSQL, this would not be a recommended production deployment target because you would be responsible for managing the database infrastructure yourself. 

## Use Azure Database 

A better option for storing a PostgreSQL database in Azure would be to use a managed service such as Azure Database for PostgreSQL.  

Azure Database for PostgreSQL is a fully managed database service that makes it easy to deploy, scale, and manage PostgreSQL databases in the cloud. It handles the underlying infrastructure and maintenance tasks, such as patching and backups, so you can focus on developing and deploying your applications. Additionally, it offers several performance and availability options that can be tailored to meet the specific needs of your applications. 

Overall, it is not advisable to use Azure Container Instances as a storage option for a PostgreSQL database due to the "chown" requirement of PostgreSQL. Instead, consider using a managed service like Azure Database for PostgreSQL to ensure a reliable and scalable solution for storing your database in Azure. 

 