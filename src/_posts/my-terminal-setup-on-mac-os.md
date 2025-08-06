---
top: 3
category: personal experience
tags:
  - experience
  - personal
  - tips
date: 2020-05-04
title: My terminal setup on macOS
---
<span dir=rtl><social-share :networks="['email', 'facebook', 'twitter', 'linkedin']" /></span>
I do most of my work in the terminal, and I keep customzing it to be usable and easy on the eye. this post is to document my current setup, and will keep updating it when the setup change.
<!-- more -->

<div style="text-align: center;"><img src="/assets/img/my-terminal-setup/terminal-setup.png" width=350></div>

## Xcode 
For installing Xcode command line tools run the command
```bash 
xcode-select --install
```
It'll prompt you to install the command line tools. Follow the instructions and now you have Xcode and Xcode command line tools both installed and running.


## iTerm2
Install a better terminal than the default one. Download and install [iTerm2](https://www.iterm2.com/).

In **Finder**, drag and drop the **iTerm** Application file into the **Applications** folder.

You can now launch iTerm, through the **Launchpad** for instance.

## ZSH
ZSH, also called the Z shell, is an extended version of the Bourne Shell (sh), with plenty of new features, and support for plugins and themes. Since it’s based on the same shell as Bash, ZSH has many of the same features, and switching over is a breeze.

Install zsh using Homebrew:

```bash 
brew install zsh
```

## Oh My Zsh
Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

Install Oh My Zsh:

```bash 
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
The installation script should set zsh to your default shell, but if it doesn't you can do it manually:

```bash 
chsh -s $(which zsh)
```
### Configuration
The out-of-the-box configuration is usable but you probably want to customise it to suit your needs. The Official Wiki contains a lot of useful information if you want to deep dive into what you can do with Oh My Zsh, but we'll cover the basics here.

apply your changes by running 

```bash 
source ~/.zshrc
```

#### Plugins
Plugins
Add plugins to your shell by adding the name of the plugin to the plugin array in your .zshrc.

```
plugins=(git colored-man-pages colorize pip python brew macos zsh-syntax-highlighting zsh-autosuggestions virtualenv)
```

You will need to manually install the autosuggestions and highlighting plugins

```bash 
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
```
then apply your changes by running 

```bash 
source ~/.zshrc
```
#### Themes
Changing theme is as simple as changing a string in your configuration file. The default theme is robbyrussell.
 Just change that value to change theme, and don't forget to apply your changes.
 I personally use solus theme
 ```bash 
wget -P $ZSH_CUSTOM/themes/ https://gist.githubusercontent.com/me2resh/248b703b1cc56bcace2a688ce7e3e71b/raw/d1fa30e1cfb35b5833f1650c01ecdc2e0b730c5b/solus.zsh-theme
```
in your .zshrc change the theme to 
```bash 
ZSH_THEME=pygmalion
```
 

## fzf
fzf is an interactive Unix filter for command-line that can be used with any list; files, command history, processes, hostnames, bookmarks, git commits, etc.


```bash
brew install fzf

# To install useful key bindings and fuzzy completion:
$(brew --prefix)/opt/fzf/install
```

which gives you:

Key bindings (CTRL-T, CTRL-R, and ALT-C) (available for bash, zsh and fish)
Fuzzy auto-completion (available for bash and zsh)
## Git and GitHub

```bash 
brew install git
```

Next, we'll define your Git user (should be the same name and email you use for GitHub):
```bash 
git config --global user.name "Your Name Here"
git config --global user.email "your_email@youremail.com"
```
They will get added to your .gitconfig file.


To prevent git from asking for your username and password every time you push a commit you can cache your credentials by running the following command, as described in the instructions.
```bash 
git config --global credential.helper osxkeychain
```


### SSH Config for GitHub
The instructions below are referenced from the official documentation.

Check for existing SSH keys
First, we need to check for existing SSH keys on your computer. We do this by running:
```bash 
ls -al ~/.ssh
```
Lists the files in your .ssh directory, if they exist

Check the directory listing to see if you have files named either id_rsa.pub or id_dsa.pub. If you don't have either of those files then read on, otherwise skip the next section.

### Generate a new SSH key
If you don't have an SSH key you need to generate one. To do that you need to run the commands below, and make sure to substitute the placeholder with your email. The default settings are preferred, so when you're asked to "enter a file in which to save the key,"" just press Enter to continue.
```bash 
ssh-keygen -t rsa -C "your_email@example.com"
```
Creates a new ssh key, using the provided email as a label
### Add your SSH key to the ssh-agent
Run the following commands to add your SSH key to the ssh-agent.
```bash 
eval "$(ssh-agent -s)"
```
If you're running macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain:
```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```
No matter what operating system version you run you need to run this command to complete this step:
```bash 
ssh-add -K ~/.ssh/id_rsa
```
Adding a new SSH key to your GitHub account
The last step is to let GitHub know about your SSH key. Run this command to copy your key to your clipboard:
```bash 
pbcopy < ~/.ssh/id_rsa.pub
```
Then go to GitHub and input your new SSH key. Paste your key in the "Key" textbox and pick a name that represents the computer you're currently using.

## Bash Completion

Bash completion is a bash function that allows you to auto complete commands or arguments by typing partially commands or arguments, then pressing the [Tab] key. This will help you when writing the bash command in terminal.


### Installation
```bash
brew install bash-completion
```
Bash completion will be installed in /usr/local/etc/bash_completion.d.

For it to work, add this to your ~/.bash_profile:
```
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
```
Or simply type:
```bash 
echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bash_profile
```
Restart your bash session:
```bash 
source ~/.bash_profile
```
Usage
Once you've done this, you can use bash completion by pressing the tab key twice after a command. For example:
```bash 
$ git [tab] [tab]
add            blame          cherry-pick    config         format-patch   gui            merge          push           repack         rm             stage          whatchanged
am             branch         citool         describe       fsck           help           mergetool      range-diff     replace        send-email     stash          worktree
apply          bundle         clean          diff           gc             init           mv             rebase         request-pull   shortlog       status
archive        checkout       clone          difftool       gitk           instaweb       notes          reflog         reset          show           submodule
bisect         cherry         commit         fetch          grep           log            pull           remote         revert         show-branch    tag
More
```
You can list additional completion packages are available by typing:
```bash 
brew search completion
```
And you can install them using brew install commands, for example:
```bash 
brew install docker-completion
```


## Vim
Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple macOS.

### Installation
To install the latest version, use homebrew:
```bash 
brew install vim
```
## The Ultimate vimrc
The Ultimate vimrc it's a collection of vimrc configurations to make easy the usage of vim.
### Installation
To download the The Ultimate vimrc, you need to install the git client. If you need install it, use home brew:
```bash
brew install git
```
Now, download the vimrc files:
```bash 
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
```
To install the complete version, run:
```bash 
sh ~/.vim_runtime/install_awesome_vimrc.sh
```
To install the basic version, run:
```bash 
sh ~/.vim_runtime/install_basic_vimrc.sh
```
### Update
To update the vimrc scripts, run:
```bash 
cd ~/.vim_runtime && git pull --rebase && cd -
```
## Maximum Awesome
Maximum Awesome it's a collection of vim configuration and plugins, like a configuration manager for the vim environment.

### Installation
To install it, just make a clone of the repository with the git client:
```bash 
git clone https://github.com/square/maximum-awesome.git
```
Then install it:
```bash 
cd maximum-awesome
rake
```
