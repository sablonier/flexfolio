### Quick install via (S)FTP
Bolt CMS is a lightweight and simple Content Management System. You don't need to install any databases and extensions with this quick install. You just need to copy the pre-configured content of flexfolio-bolt-folder to your webserver root (or folder) and let Bolt CMS and flexfolio configuration do the rest.

**Step 1:** **Download** pre-configured Flexfolio-Bolt-CMS from

`https://download.all-mine.org/downloads/flexfolio-bolt-3.6.5.zip`

**Step 2:** **Extract** the .zip-File

**Step 3:** Get the (S)FTP-Crendentials of your hosting and **copy all the content of the folder you got to your webroot** via your favourite FTP-Programm (i.e. [Cyberduck](https://cyberduck.io/) )

**Step 4:** **Point your webbrowser to your webserver** (i.e. https://www.myname.com/admin) and start with creating the first user.



###Install via shell with own Bolt CMS install
*For this installation you will need **shell access (ssh)** to your webserver.* All Mine Flexfolio comes with it's own theme and configurations files for Bolt CMS. You can install your own Bolt CMS via shell and with a few steps more you  are with flexfolio theme and all needed extensions.

#### Bolt CMS install
**Step 1:** Login to your server and change to your **webroot directory** (`htdocs`, `www` or `whateverwebroot`), i.e.

`cd htdocs/`

**Step 2:** Get latest Bolt CMS distribution for **flat structure** install:

`curl -O https://bolt.cm/distribution/bolt-latest-flat-structure.tar.gz`

**Step 3:** **Decompress** the file and get all files

These step will take some time, be patient after executing this command.

`tar -xzf bolt-latest-flat-structure.tar.gz --strip-components=1`

**Step 4:** **Init Bolt CMS** with following

`php app/nut init`

You could get some warnings but at the end you should get a greeting with Bolt CMS version *Welcome to Bolt! - version 3.x.x*


**Step 5:** If everything goes well **remove** the compressed tar.gz-File

`rm bolt-latest-flat-structure.tar.gz`

#### Flexfolio theme install

**Step 1:** cd to theme directory in your new bolt installation

`cd theme/`

**Step 2:** To **get the latest flexfolio theme** clone the repository with git

`git clone git://github.com/sablonier/flexfolio.git`

**Step 3:** ** Copy the example configurations** to your Bolt CMS app directory with

`cp flexfolio/config-examples/config.example.yml ../app/config/config.yml`
`cp flexfolio/config-examples/contenttypes.example.yml ../app/config/contenttypes.yml`
`cp flexfolio/config-examples/taxonomy.example.yml ../app/config/taxonomy.yml`
`cp flexfolio/config-examples/menu.example.yml ../app/config/menu.yml`

#### Create first user and login

Point your webbrowser to the address admin panel where you installed Bolt CMS (i.e. https://www.myname.com/admin) and create the first user. This will be your main admin user (called root user in Bolt CMS). Later you can add more users.

`https://www.myname.com/admin`

Please note that with All Mine Bolt CMS the address of the admin panel is **/admin** and NOT /bolt.

#### Install translation extension bolt/translate

**Step 1:** On the dashboard click on "Extensions". In the field "Install a new Extension type

`translate`

and browse versions of this extension. **Install the latest stable version** of the extension "animal/translate". In case you see a warning after installing the extension choose "->Configuration/Check Database" and **update the database**.

**Step 2:** Go back to your shell and copy the example extension configuration file with

`cp flexfolio/config-examples/extensions/translate.animal.example.yml ../app/config/extensions/translate.animal.yml`

Point your your browser to your webaddress, without /admin and you should see your site. Start to publish your content.




