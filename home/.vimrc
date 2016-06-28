" .vimrc

source $HOME/.vim/basic.vim
source $HOME/.vim/mappings.vim
source $HOME/.vim/colors.vim
source $HOME/.vim/plugins.vim

if filereadable(glob('$HOME/.vimrc.local'))
  source $HOME/.vimrc.local
endif
