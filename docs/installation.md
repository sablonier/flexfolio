###Installation with default Bolt CMS install
*For this installation you will need **shell access (ssh)** to your webserver.*

#### Bolt CMS install
Step 1: Login to your server and change to your **webroot directory** (`htdocs`, `www` or "whateverwebroot")

>`cd htdocs/`

 Step 2: Get latest Bolt CMS distribution for **flat structure** install:

>`curl -O https://bolt.cm/distribution/bolt-latest-flat-structure.tar.gz`

Step 3: **Decompress** the file and get all files

These step takes some seconds, be patient after sending this line.

>`tar -xzf bolt-latest-flat-structure.tar.gz --strip-components=1`

Step 4: **Init Bolt CMS** with following

>`php app/nut init`

You should get a greeting with Bolt CMS version *Welcome to Bolt! - version 3.x.x*


Step 5: If everything goes well **remove** the compressed tar.gz-File

>`rm bolt-latest-flat-structure.tar.gz`

#### Flexfolio theme install

Step 1: cd to theme directory in your new bolt installation

>`cd theme/`

Step 2: To **get the latest flexfolio theme** clone the repository with git

>`git clone git://github.com/sablonier/flexfolio.git`

Step 3:** Copy the example configurations** to your Bolt CMS app directory with

>`cp flexfolio/config-examples/config.example.yml ../app/config/config.yml`

>`cp flexfolio/config-examples/contenttypes.example.yml ../app/config/contenttypes.yml`

>`cp flexfolio/config-examples/taxonomy.example.yml ../app/config/taxonomy.yml`

>`cp flexfolio/config-examples/menu.example.yml ../app/config/menu.yml`

#### Create first user and login

Point your webbrowser to the address admin panel where you installed Bolt CMS (i.e. https://www.myname.com/admin) and create the first user. This will be your main admin user (called root user in Bolt CMS). Later you can add more users.

>`https://www.myname.com/admin`

Please note that with All Mine Bolt CMS the address of the admin panel is **/admin** and NOT /bolt.

#### Install translation extension bolt/translate

On the dashboard click on "Extensions". In the field "Install a new Extension type:

>`translate`

and browse versions of this extension. **Install the latest stable version** of the extension "animal/translate". In case you see a warning after installing the extension choose "->Configuration/Check Database" and **update the database**.

Point your your browser to your webaddress, without /admin and you should see your site. Start to fill it with content!




