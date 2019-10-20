---
title: Working with PHP 5 on Mac OS X 10.5 (Leopard)
date: 2008-01-07 15:35:18
excerpt: How to get PHP 5 working locally on Mac osx Leopard
type: post
blog: true
# tags:
#     - Wordpress
#     - Vuepress
#     - blogging
---


I found these steps very useful, hope you will too.Mac OS X is a great development platform for working with PHP. Leopard comes with Apache, PHP and many other development tools, such as subversion already installed. Leopard brings a much needed upgrade from Tiger's tired PHP 4 to a very modern version of PHP 5.2.4. This is a guide for setting up a PHP development environment under 10.5 using the version of PHP that ships with leopard.

You may prefer to use one of the 3rd party distributions of PHP, such as MAMP, XAMPP or Marc Liyanage. This is a guide to using the version of PHP that comes with 10.5.

## Enable Developer Tools
These steps may not be strictly necessary for this process, but I find it useful to do them.
First, enable your root password.You may also want to install XCode Tools from your Leopard disk (or grab the latest from Apple developer tools). The tools are required is you are going to compile any extensions for PHP.

## Editing Configuration Files

We will have to edit several configuration files that exist as part of the unixy underpinnings of OS X. I'm going to recommend the free text editor, TextWrangler for this purpose. Normally, the finder hides the configuration files from view. However, in the finder, you can use the "Goto Folder..." option under the "Go" menu to view these files. This option if available via command-shift-G. Actually, this option is available in any file open dialog in OS X via command-shift-G. In addition, Text Wrangler will allow you to browse these files with its "open hidden..." option. But, the much easier option is selecting "Open file by name..." (command-D) and just typing the full path and filename. To save many of these files, you will need to enter your root password. Be Careful.

## Enabling PHP
PHP is installed in Mac OS X by default, but not enabled. To enable it, we must edit the apache 2 configuration file, which is located at /etc/apache2/httpd.conf. Find the line which loads the PHP 5 module, which looks like this:
```
#LoadModule php5_module        libexec/apache2/libphp5.so
```
The line is currently commented out. All we have to do is remove the comment symbol, #, so the line looks like this:

```
LoadModule php5_module        libexec/apache2/libphp5.so
```
Save.

## Starting Apache
Go to the sharing panel in system preferences and enable "Web Sharing." This will start the apache server.Another way to do this is to type the following in the Terminal application:
```
sudo apachectl start
```
You will be prompted to enter your root password. After that, your apache server should now be running. If you need to restart the server from the terminal, you can type this:
```
sudo apachectl restart
```
If you find this tedious to type, there is a script that you can download to do this later in this post.

## Visiting our Web Site
Now, lets check our work. In the sharing panel, you can click on the URL under "Your computer's website." Alternatively, in the web browser, go to the url http://localhost/. localhost is a special name that means "My computer." If your web server is working, you should see a page titled "Test Page for Apache Installation." If you go to http://localhost/manual/, you can read an Apache 2.2 manual, hosted from your own server. But, this don't tell you that PHP is working.For that, we'll have to create a very simple php program. Create a new file in TextWrangler and type the following: