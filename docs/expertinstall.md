### Expert install via shell (ssh)

>With this install you will get latest Bolt CMS and the Flexfolio theme and extensions separately. You will need to configure the install yourself. All Mine Flexfolio comes example contenttypes files for Bolt CMS. Here you can install your individual Bolt CMS via shell and with a few steps more you are with flexfolio theme and all needed configuration files and extensions.

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

**Step 1:** On the dashboard click on "Extensions". In the field "Install a new Extension" type

`translate`

and browse the versions of this extension. **Install the latest stable version** of the extension "animal/translate" now. In case you see a warning after installing the extension choose "->Configuration/Check Database" and **update the database**. Or do that anyway.

**Step 2:** Go back to your shell and copy the example extension configuration file with

`cp flexfolio/config-examples/extensions/translate.animal.example.yml ../app/config/extensions/translate.animal.yml`

Point your your browser to your webaddress, without /admin in URL and you should see your site. Go back to the dashboard under /admin and tart to publish your content.




