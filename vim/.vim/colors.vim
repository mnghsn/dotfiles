" ~/.vim/colors.vim

if has('syntax')
  " Enable syntax highlight.
  syntax enable
  " Set 256 color terminal support.
  set t_Co=256
  " Set dark background.
  set background=dark

  " Enable True Color (vim >= 8.0).
  if has('termguicolors')
    " Set Vim-specific sequences for RGB colors.
    let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
    let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"

    set termguicolors
  endif
endif
