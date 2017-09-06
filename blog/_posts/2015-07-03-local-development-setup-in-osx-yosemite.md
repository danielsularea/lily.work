---
layout: blogpost
title:  Local Development Setup in OS X Yosemite
---

I purchased a new Macbook and found myself in the very tasking process of setting everything back the way it used to be so I've decided to document what I do for a general setup.

## Hidden Files
First let's reveal all the hidden files to make things easier to find. In Terminal, enter `sudo nano ~/.bash_profile`. Then, paste these two lines into the file:

``` shell
alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
```

Then save the file with `Ctrl + O` and then `Ctrl + X` to return to the command line. You can now run `showFiles` to see hidden directories and `hideFiles` to hide them.

## Installations
- Run `xcode-select --install` to install the XCode Command Line Tools.
- Then get [Homebrew][homebrew]{:target="_blank"} with

``` shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- Next paste `brew install caskroom/cask/brew-cask` to install [Homebrew Cask][cask]{:target="_blank"}
- Cask install your applications. Click [here][cask-search]{:target="_blank"} to search them. I typically go for

``` shell
brew cask install google-chrome iterm2 alfred sublime-text spectacle caffeine java spotify unrarx
```

## Sublime Text
- Set up Package Control for the version of Sublime Text you have using the Python snippet found [here][package-control]{:target="_blank"}.
- [Spacegray Theme][spacegray]{:target="_blank"}: `Cmd + Shift + P`, choose `Package Control: Install Package`, and then find `Theme - Spacegray`.
- I do a lot of writing in LaTeX so I like to compile my files right in Sublime Text. To do so, first [install BasicTeX][basictex]{:target="_blank"}. You don't need the full MacTeX and I generally don't like to install it because it's such a huge file. That being said, MacTeX does have a lot of packages you may need for templates and such. To combat this, I install each additional package manually using `tlmgr`.
- Test if the `tlmgr` command works in your Terminal with `which tlmgr`, which should return the path that the bin file belongs to. However, if it does not, you may need to add it to your `$PATH`.
- Update `tlmgr` with `sudo tlmgr update —self` if needed.
- Install `latexmk` with `sudo tlmgr install latexmk`. (This is how you'd install any packages from MacTeX that isn't already in BasicTeX)

## PostgreSQL
I use [PostgreSQL][postgresql]{:target="_blank"} for both my rails and django projects so I won't be installing MySQL on my computer just yet. To get PostgreSQL, I run

``` shell
brew install postgresql

# Start postgresql at login
ln -sfv /usr/local/opt/postgresql/*plist ~/Library/LaunchAgents

# Load postgresql now
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

## Ruby on Rails
OS X comes with ruby installed but let's get our own by first running `brew install rbenv ruby-build`. You may need to add `if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi` to your `.bash_profile` to be able to access the command directly. Then install ruby and rails with

``` shell
rbenv install 2.2.3
rbenv global 2.2.3
gem install rails
rbenv rehash
```

## Django
To avoid conflicts between packages for each project, let's install Django to work with virtual environments. To do so, run

``` shell
brew install python
pip install virtualenv virtualenvwrapper
mkdir ~/.virtualenvs
```

Then, yet again edit your `.bash_profile` file and add the following to get a shortcut to activate/deactivate your virtual environments.

``` shell
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
export PIP_VIRTUALENV_BASE=$WORKON_HOME
alias workoff='deactivate'
```

Now, you should be able to run `mkvirtualenv test` to create a new python virtual environment named "test" and use `workon test` to activate it. Once you're in the proper virtualenv, run `pip install django psycopg2` to get Django and have it to be able to interact with PostgreSQL.

## Extra Steps
- [Set up SSH key for Git.][git-ssh]{:target="_blank"}
- If you decide to use [PostgreSQL.app][postgresql-app]{:target="_blank"} instead, don't cask install it. Since cask aliases and actually stores the applications elsewhere, PostgreSQL.app don't run until you drag and drop it into the Applications folder anyways. Also, you will need to add `export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin` to `.bash_profile` to use its tools.
- [Install Node.js][node]{:target="_blank"} to get things like Grunt or Gulp later.

## Summary
Although this article was fairly long, it really only takes at most an hour to finish. I definitely have multiple Terminal sessions going at once when they don't have any dependency conflicts. I have also had a lot of trouble  configuring Apache manually so I kind of cop out by using [MAMP][mamp]{:target="_blank"} but I'll keep working out the kinks before I post any instructions.

[homebrew]: http://brew.sh/
[cask]: http://caskroom.io/
[cask-search]: http://caskroom.io/search
[package-control]: https://packagecontrol.io/installation#st2
[spacegray]: http://kkga.github.io/spacegray/
[basictex]: https://tug.org/mactex/morepackages.html
[postgresql]: http://www.postgresql.org/
[postgresql-app]: http://postgresapp.com/
[node]: https://nodejs.org/en/
[git-ssh]: https://help.github.com/articles/generating-ssh-keys/
[mamp]: https://www.mamp.info/