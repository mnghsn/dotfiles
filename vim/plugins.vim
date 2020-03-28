" ~/.vim/plugins.vim

" ------------------------------------------------------------------------------
" Plugin Manager
" ------------------------------------------------------------------------------

" Install vim-plug and plugins.
" https://github.com/junegunn/vim-plug/wiki/tips
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" Load plugins.
call plug#begin('~/.vim/plugged')
Plug 'jacoborus/tender.vim'
Plug 'itchyny/lightline.vim'
Plug 'airblade/vim-gitgutter'
Plug 'Yggdroot/indentLine'
Plug 'editorconfig/editorconfig-vim'
Plug 'sheerun/vim-polyglot'
call plug#end()

" ------------------------------------------------------------------------------
" Plugin Configuration
" ------------------------------------------------------------------------------

" Plugin: jacoborus/tender.vim
silent! colorscheme tender

" Plugin: tchyny/lightline.vim
let g:lightline = { 'colorscheme': 'tender' }
