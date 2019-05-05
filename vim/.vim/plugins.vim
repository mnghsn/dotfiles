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
Plug 'airblade/vim-gitgutter'
Plug 'ap/vim-css-color', { 'for': 'css' }
Plug 'editorconfig/editorconfig-vim'
Plug 'elzr/vim-json', { 'for': 'json' }
Plug 'jacoborus/tender.vim'
Plug 'othree/es.next.syntax.vim', { 'for': 'javascript' }
Plug 'othree/html5.vim', { 'for': 'html' }
Plug 'othree/yajs.vim', { 'for': 'javascript' }
Plug 'plasticboy/vim-markdown', { 'for': 'markdown' }
Plug 'scrooloose/nerdtree', { 'on': ['NERDTreeToggle', 'NERDTreeFind'] }
Plug 'terryma/vim-multiple-cursors'
Plug 'tpope/vim-surround'
Plug 'vim-airline/vim-airline'
Plug 'Xuyuanp/nerdtree-git-plugin', { 'on': ['NERDTreeToggle', 'NERDTreeFind'] }
Plug 'Yggdroot/indentLine'

call plug#end()

"""""""""""""""""""""""""""""""""""""""
" Plugin: tender
"""""""""""""""""""""""""""""""""""""""

" Set color scheme.
silent! colorscheme tender
" Set vim-airline theme.
let g:airline_theme = 'tender'

"""""""""""""""""""""""""""""""""""""""
" Plugin: indentLine
"""""""""""""""""""""""""""""""""""""""

" Set conceal color.
let g:indentLine_color_term = 239

"""""""""""""""""""""""""""""""""""""""
" Plugin: NERDTree
"""""""""""""""""""""""""""""""""""""""

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1

" Use <Ctrl>-<M> to toggle NERDTree.
nmap <C-M> :NERDTreeToggle<CR>

"""""""""""""""""""""""""""""""""""""""
" Plugin: vim-airline
"""""""""""""""""""""""""""""""""""""""

" Always show status line.
set laststatus=2

" Set vim-airline theme.
"let g:airline_theme = 'dark'
" Show a clock at section x.
let g:airline_section_x = '%{strftime("%m/%d %H:%M")}% '
" Enable tabline.
let g:airline#extensions#tabline#enabled = 1
" Show only file name in tabline.
let g:airline#extensions#tabline#fnamemod = ':t'
" Use Powerline fonts.
let g:airline_powerline_fonts = $HAS_POWERLINE_FONT

" Use <Tab> to switch to next buffer in NORMAL mode.
nmap <Tab> :bn!<CR>
" Use <`> to switch to previous buffer in NORMAL mode.
nmap ` :bp!<CR>
" Use <Leader>-<D> to close current buffer.
nmap <Leader>d :bd<CR>

"""""""""""""""""""""""""""""""""""""""
" Plugin: vim-json
"""""""""""""""""""""""""""""""""""""""

" Disable concealing.
let g:vim_json_syntax_conceal = 0

"""""""""""""""""""""""""""""""""""""""
" Plugin: vim-markdown
"""""""""""""""""""""""""""""""""""""""

" Disable folding.
let g:vim_markdown_folding_disabled = 1
" Disable concealing.
let g:vim_markdown_conceal = 0
" Enable YAML front matter.
let g:vim_markdown_frontmatter = 1
" Enable JSON front matter.
let g:vim_markdown_json_frontmatter = 1
" Set new list item indentation to 2 spaces.
let g:vim_markdown_new_list_item_indent = 2
