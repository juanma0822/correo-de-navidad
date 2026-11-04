const DESTINATION = "juanmanuelva3243@gmail.com";

function doPost(e) {
  try {
    const data = e.parameter || {};
    // Trampa simple para bots; los envíos normales dejan este campo vacío.
    if (data.website) return output_("ok");
    const sender = String(data.sender || "").trim().slice(0, 60);
    const recipient = String(data.recipient || "").trim().slice(0, 30);
    const message = String(data.message || "").trim().slice(0, 1200);
    const image = String(data.image || "");
    if (!sender || !message || !image || image.length > 1800000) {
      throw new Error("Carta incompleta o demasiado grande.");
    }
    const attachment = Utilities.newBlob(
      Utilities.base64Decode(image),
      "image/png",
      "Cartita de Navidad - " + sender.replace(/[\\/:*?"<>|]/g, "_") + ".png"
    );
    MailApp.sendEmail({
      to: DESTINATION,
      subject: "Carta de Navidad de " + sender.replace(/[\r\n]/g, " "),
      body: "Carta para " + recipient + ":\n\n" + message + "\n\nLa cartita va adjunta como imagen.",
      attachments: [attachment],
      name: "Correo de Navidad"
    });
    return output_("ok");
  } catch (error) {
    console.error(error);
    return output_("error");
  }
}

function output_(value) {
  return ContentService.createTextOutput(value).setMimeType(ContentService.MimeType.TEXT);
}
