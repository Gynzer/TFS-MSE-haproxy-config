. function FindProxyForURL(url, host)

{
    if ( dnsDomainIs(host,"uspgh-bioapp-d1.amer.thermo.com") ) {
      return "PROXY 10.175.129.13:8092";
    }

    else

    return "DIRECT";
}