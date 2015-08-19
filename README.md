# CSWebsite
A recreation of the Coke Studios website before the MyCoke version.

## Installation
Installation is relatively simple because we're usig nodejs

1) Install node if you don't already have it https://nodejs.org/download/

2) In terminal set your directory to the same directory as package.json

3) Run the command `npm install`

4) Then run `npm start` or `node server.js` _(runs as sudo/administrator if you have issues)_

## Configuration
The configuration file is `config.json`

* `port`: the port the server runs on _(default: `80`)_


## Notes and Warnings
### crossdomain.xml
If you're running this on a public server ensure you change the crossdomain.xml file. Read about that here: https://www.adobe.com/devnet/adobe-media-server/articles/cross-domain-xml-for-streaming.html

### localhost/127.0.0.1/file:
badge.swf is setup to reroute the location of avatar_engine.swf if it is running on localhost, 127.0.0.1, or is served from file:// - so you will need to alter your hosts file or run it on a server and pass it as a A/CNAME record.

For development I use cokestudios.local and point it to 127.0.0.1, on Mac and Linux machines this is in /etc/hosts

#### localhost/127.0.0.1/file update: Mac / Linux
Run this in Terminal under Mac / Linux to add cokestudios.local to your hosts file:
```
sudo -- sh -c "echo 127.0.0.1 cokestudios.local >> /etc/hosts"
```

#### localhost/127.0.0.1/file update: Windows _(xp, vista, 7, 8, 10)_
Run this in Command Prompt under Windows to add cokestudios.local to your hosts file:
```
echo 127.0.0.1 cokestudioslocal >> %WINDIR%\System32\Drivers\Etc\Hosts
```

If that did not work, there is a file in the scripts folder called HostsFileWindows.cmd.
Right Click the HostsFileWindows.cmd file -> Run As Administrator
