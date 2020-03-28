" ~/.vim/colors.vim

" ------------------------------------------------------------------------------
" Colors
" ------------------------------------------------------------------------------

if has('syntax')
  " Enable syntax highlight.
  syntax enable

  " Enable 256 color terminal support.
  set t_Co=256

  " Set dark background.
  set background=dark

  if has('termguicolors')
    " Set Vim-specific sequences for RGB colors.
    let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
    let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"

    " Enable 24-bit color.
    set termguicolors
  endif
endif
