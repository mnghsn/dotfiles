" ~/.vim/colors.vim

if has('syntax')
  " Enable syntax highlight.
  syntax enable
  " Set 256 color terminal support.
  set t_Co=256
  " Set dark background.
  set background=dark

  " Set color scheme.
  silent! colorscheme molokai
endif
