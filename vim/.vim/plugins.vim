" ~/.vim/plugins.vim

"""""""""""""""""""""""""""""""""""""""
" Plugin Manager
"""""""""""""""""""""""""""""""""""""""

" Automatically install vim-plug and plugins.
" https://github.com/junegunn/vim-plug/wiki/tips
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')

" Load plugins.
Plug 'jacoborus/tender.vim'
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'itchyny/lightline.vim'
Plug 'airblade/vim-gitgutter'
Plug 'Yggdroot/indentLine'
Plug 'terryma/vim-multiple-cursors'
Plug 'tpope/vim-surround'
Plug 'editorconfig/editorconfig-vim'
Plug 'sheerun/vim-polyglot'
Plug 'ap/vim-css-color'

call plug#end()

"""""""""""""""""""""""""""""""""""""""
" Plugin: tender
"""""""""""""""""""""""""""""""""""""""

" Set color scheme.
silent! colorscheme tender
" Set vim-airline theme.
let g:airline_theme = 'tender'

"""""""""""""""""""""""""""""""""""""""
" Plugin: NERDTree
"""""""""""""""""""""""""""""""""""""""

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1

" Use <Ctrl>-<M> to toggle NERDTree.
nmap <C-M> :NERDTreeToggle<CR>
