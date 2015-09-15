---
layout: blog
title:  Local Development Setup in OS X Yosemite
---

I purchased a new Macbook and found myself in the very tasking process of setting everything back the way it used to be so I've decided to document what I do for a general setup for future purposes and anyone else who may be in the same situation.

## Hidden Files
First let's reveal all the hidden files to make things easier to find. In Terminal, enter `sudo nano ~/.bash_profile`. Then, paste these two lines into the file:

<pre class="line-numbers"><code class="language-none">alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
</code></pre>

Then save the file with `Ctrl + O` and then `Ctrl + X` to return to the command line.

## Installations
- Run `xcode-select --install` to install the XCode Command Line Tools.
- Then get [Homebrew][homebrew] with
<pre class="line-numbers"><code class="language-none">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre>
- Next paste `brew install caskroom/cask/brew-cask` to install [Homebrew Cask][cask]
- Cask install your applications. Click [here][cask-search] to search them. I typically go for
<pre class="line-numbers"><code class="language-none">brew cask install google-chrome iterm2 alfred sublime-text spectacle caffeine java vuze spotify unrarx</code></pre>

## Sublime Text
- Set up Package Control for the version of Sublime Text you have using the Python snippet found [here][package-control].
- [Spacegray Theme][spacegray]: `Cmd + Shift + P`, choose `Package Control: Install Package`, and then find `Theme - Spacegray`.
- I do a lot of writing in LaTeX so I like to compile my files right in Sublime Text. To do so, first [install BasicTeX][basictex]. You don't need the full MacTeX and I generally don't like to install it because it's such a huge file. However, it does have a lot of packages you may need for templates and such.
- Test if the `tlmgr` command works in your Terminal with `which tlmgr`, which should return the path that the bin file belongs to. However, if it does not, you may need to add it to your $PATH.
- Update `tlmgr` with `sudo tlmgr update —self` if needed.
- Install `latexmk` with `sudo tlmgr install latexmk`. (This is how you'd install any packages from MacTeX that isn't already in BasicTeX)

## PostgreSQL
I use [PostgreSQL][postgresql] for both my rails and django projects so I won't be installed MySQL on my computer just yet. To get PostgreSQL, I run
<pre class="line-numbers"><code class="language-none">brew install postgresql

# Start postgresql at login
ln -sfv /usr/local/opt/postgresql/*plist ~/Library/LaunchAgents

# Load postgresql now
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist</code></pre>

## Ruby on Rails
OS X comes with ruby installed but let's get our own by first running `brew install rbenv ruby-build`. You may need to add `if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi` to your `.bash_profile` to be able to access the command directly. Then install ruby and rails with
<pre class="line-numbers"><code class="language-none">rbenv install 2.2.3
rbenv global 2.2.3
gem install rails
rbenv rehash</code></pre>

## Django
To avoid conflicts between packages for each project, let's install Django to work with virtual environments. To do so, run
<pre class="line-numbers"><code class="language-none">brew install python
pip install virtualenv virtualenvwrapper
mkdir ~/.virtualenvs</code></pre>

Then, yet again edit your `.bash_profile` file and add the following to get a shortcut to activate/deactivate your virtual environments.
<pre class="line-numbers"><code class="language-none">export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
export PIP_VIRTUALENV_BASE=$WORKON_HOME
alias workoff='deactivate'</code></pre>

Now, you should be able to run `mkvirtualenv test` to create a new python virtual environment named "test" and use `workon test` to activate it. Once you're in the proper virtualenv, run `pip install django psycopg2` to get Django and have it to be able to interact with PostgreSQL.

## Extra Steps
- [Set up SSH key for Git.][git-ssh]
- If you decide to use [PostgreSQL.app][postgresql-app] instead, don't cask install it. Since cask aliases and actually stores the applications elsewhere, PostgreSQL.app don't run until you drag and drop it into the Applications folder anyways. Also, you will need to add `export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin` to `.bash_profile` to use its tools.
- [Install Node.js][node] to get things like Grunt or Gulp later.

## Summary
Although this article was fairly long, it really only takes at most an hour to finish. I definitely have multiple Terminal sessions going at once when they don't have any dependency conflicts. I have also had a lot of trouble  configuring Apache manually so I kind of cop out by using [MAMP][mamp] but I'll keep working out the kinks before I post any instructions.

<div class="article__postscript">
Sources<br />
- http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/<br />
- https://gorails.com/setup/osx/10.10-yosemite<br />
- http://www.rubycoloredglasses.com/2015/02/setup-environment-for-django-development/
</div>

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
