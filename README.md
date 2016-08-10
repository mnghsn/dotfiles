# dotfiles
[![Travis CI](https://img.shields.io/travis/jmlntw/dotfiles.svg?maxAge=86400)](https://travis-ci.org/jmlntw/dotfiles)

My personal configuration files.

## Installation

### Quick Installation

```bash
$ curl -L https://raw.githubusercontent.com/jmlntw/dotfiles/master/bin/dotfiles | bash
```

### Using [Docker](https://www.docker.com/)

```bash
$ git clone https://github.com/jmlntw/dotfiles.git dotfiles
$ cd dotfiles
$ sudo docker build -t jmlntw/dotfiles .
$ sudo docker run -it --rm jmlntw/dotfiles
```

**Note**: If you want to fork this repository and maintain your own dotfiles, you must substitute my user name and repository name for your own in the above command and the 2 variables found at the top of `bin/dotfiles` script.

## Usage

```bash
$ dotfiles [options]
```

Options:

* `-h`, `--help`: Print help message.
* `--no-update`: Do not update dotfiles from the remote repository.

## Credits

* [dotfiles](https://github.com/necolas/dotfiles) by [necolas](https://github.com/necolas)
* [dotfiles](https://github.com/isaacs/dotfiles) by [isaacs](https://github.com/isaacs)
* [dotfiles](https://github.com/eed3si9n/dotfiles) by [eed3si9n](https://github.com/eed3si9n)
* [dotfiles](https://github.com/b4b4r07/dotfiles) by [b4b4r07](https://github.com/b4b4r07)
* [ssarcandy-vim](https://github.com/SSARCandy/ssarcandy-vim) by [SSARCandy](https://github.com/SSARCandy)
* [vim-plug](https://github.com/junegunn/vim-plug) by [junegunn](https://github.com/junegunn)
* [The Ultimate Bashrc File GNOME-Look.org](http://gnome-look.org/content/show.php/Ultimate+Bashrc+File?content=129746)
* [Font configuration - ArchWiki](https://wiki.archlinux.org/index.php/font_configuration)
* [The Ghacks user.js Firefox privacy and security list has been updated - gHacks Tech News](http://www.ghacks.net/2016/01/04/the-firefox-privacy-and-security-list-has-been-updated/)

## License

Licensed under the [MIT License](LICENSE.md)
