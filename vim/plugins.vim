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
Plug 'mengelbrecht/lightline-bufferline'
Plug 'tpope/vim-fugitive'
Plug 'preservim/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'Yggdroot/indentLine'
Plug 'airblade/vim-gitgutter'
Plug 'editorconfig/editorconfig-vim'
Plug 'sheerun/vim-polyglot'
call plug#end()

" ------------------------------------------------------------------------------
" Plugin Configuration
" ------------------------------------------------------------------------------

"
" Plugin: jacoborus/tender.vim
"

" Set color scheme.
silent! colorscheme tender

"
" Plugin: itchyny/lightline.vim
"

" Always show the tabline.
set showtabline=2

" Configurate lightline.
let g:lightline = {
  \ 'colorscheme': 'tender',
  \
  \ 'active': {
  \   'left': [
  \     [ 'mode', 'paste' ],
  \     [ 'filename', 'readonly', 'modified' ],
  \     [ 'gitbranch' ],
  \   ],
  \ },
  \
  \ 'tabline': {
  \   'left': [ [ 'buffers' ] ],
  \   'right': [ [ 'close' ] ],
  \ },
  \
  \ 'component_function': {
  \   'gitbranch': 'FugitiveHead',
  \ },
  \
  \ 'component_expand': {
  \   'buffers': 'lightline#bufferline#buffers',
  \ },
  \
  \ 'component_type': {
  \   'buffers': 'tabsel',
  \ },
  \ }

"
" Plugin: preservim/nerdtree
"

" Disable the "Bookmarks" label and "Press ? for help" text.
let NERDTreeMinimalUI = 1

" Show hidden files.
let NERDTreeShowHidden = 1

" <Ctrl>-<N> to open NERDTree.
nmap <C-n> :NERDTreeToggle<CR>

" Open NERDTree automatically when vim starts up on opening a directory.
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter *
  \ if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") |
  \   exe 'NERDTree' argv()[0] | wincmd p | ene | exe 'cd '.argv()[0] |
  \ endif
