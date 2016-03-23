# dotfiles

My personal configuration files.

## Features

Install and update configuration files automatically. These configuration files are included:

* Bash
* Git
* Vim
* Fontconfig for Linux
* [Atom](https://atom.io/)
* [Mozilla Firefox](https://www.mozilla.org/firefox)

## Installation

This Installation step requires **cURL** and **git**.

```bash
$ curl --silent https://raw.githubusercontent.com/jmlntw/dotfiles/master/bin/dotfiles.sh | bash
```

**Note**: If you want to fork this repository and maintain your own dotfiles, you must substitute my user name and repository name for your own in the above command and the 2 variables found at the top of `bin/dotfiles.sh` script.

## Update

```bash
$ bash dotfiles.sh [options]
```

Options:

* `-h` or `--help`: Print a help message.
* `--no-sync`: Suppress pulling from the remote repository.

## Credits

* [dotfiles](https://github.com/necolas/dotfiles) by [necolas](https://github.com/necolas)
* [dotfiles](https://github.com/isaacs/dotfiles) by [isaacs](https://github.com/isaacs)
* [dotfiles](https://github.com/eed3si9n/dotfiles) by [eed3si9n](https://github.com/eed3si9n)
* [ssarcandy-vim](https://github.com/SSARCandy/ssarcandy-vim) by [SSARCandy](https://github.com/SSARCandy)
* [vim-plug](https://github.com/junegunn/vim-plug) by [junegunn](https://github.com/junegunn)
* [The Ultimate Bashrc File GNOME-Look.org](http://gnome-look.org/content/show.php/Ultimate+Bashrc+File?content=129746)
* [Font configuration - ArchWiki](https://wiki.archlinux.org/index.php/font_configuration)
* [The Ghacks user.js Firefox privacy and security list has been updated - gHacks Tech News](http://www.ghacks.net/2016/01/04/the-firefox-privacy-and-security-list-has-been-updated/)

## License

Licensed under the [MIT License](LICENSE.md).
