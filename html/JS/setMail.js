function setMail() {
	//mail mask
    a1 = "zzaznzzzazitzsaztz@zzzczazmpuzsz.ztzechzznzzionz.zazczz.zilz";
    address = a1.replace(/z/g,"");
    e = "<a href=\"mailto:" + address + "\" target=\"_blank\" >" + address + "</a> ";
    $(".emailplace").html(e);
}
