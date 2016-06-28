""""""""""""""""""""""""""""""""""""""""
" Key mappings
""""""""""""""""""""""""""""""""""""""""

" Use <Shift>-<Arrows> to select the active split
noremap <S-Up> <C-W><C-K>
imap <S-Up> <Esc><S-Up>
noremap <S-Down> <C-W><C-J>
imap <S-Down> <Esc><S-Down>
noremap <S-Left> <C-W><C-H>
imap <S-Left> <Esc><S-Left>
noremap <S-Right> <C-W><C-L>
imap <S-Right> <Esc><S-Right>

" Clear search highlight by dobule tapping <Esc>
nmap <Esc><Esc> :nohlsearch<CR><Esc>

" Save file
nmap <Leader>s :update<CR>
