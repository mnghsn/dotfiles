#!/bin/bash
#
# .bash_aliases

# Allow aliases to be with sudo.
alias sudo='sudo '

# Easier navigation.
alias ..='cd ..'
alias ...='cd ...'
alias ~='cd ~'
alias -- -='cd -'

# Enable color support.
if [[ -x /usr/bin/dircolors ]]; then
  test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
  alias ls='ls --color=auto'
  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
fi

# List directory.
alias ls='ls -CF'
alias la='ls -A --group-directories-first'
alias ll='ls -alF --group-directories-first'

# Clear screen.
alias cls='clear'
