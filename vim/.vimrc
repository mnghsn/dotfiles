" .vimrc

source $HOME/.vim/vimrc.basic
source $HOME/.vim/vimrc.mappings
source $HOME/.vim/vimrc.colors
source $HOME/.vim/vimrc.plugins

if filereadable(glob('$HOME/.vimrc.local'))
  source $HOME/.vimrc.local
endif
