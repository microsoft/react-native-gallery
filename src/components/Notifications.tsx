const Notifications = Windows.UI.Notifications;
const ToastTemplateType = Notifications.ToastTemplateType;
const ToastNotificationManager = Notifications.ToastNotificationManager;
const ToastNotification = Notifications.ToastNotification;

export function showNotification(notification) {
  var type = ToastTemplateType.toastText01;

  var obj = {};
  if (typeof notification === 'string') {
    obj.text = notification;
  } else {
    obj = notification;
  }

  if (obj.template != undefined) {
    type = obj.template;
  }

  var xml = ToastNotificationManager.getTemplateContent(type);
  for (var tagName in obj) {
    var xmlElements = xml.getElementsByTagName(tagName);
    var value = obj[tagName];
    if (typeof value === 'string') {
      fillXmlElements(xml, xmlElements, [value]);
    } else if (Array.isArray(value)) {
      fillXmlElements(xml, xmlElements, value);
    } else if (typeof value === 'object') {
      fillXmlElements(xml, xmlElements, [value]);
    }
  }

  var toast = new ToastNotification(xml);
  ToastNotificationManager.createToastNotifier().show(toast);
}

function fillXmlElements(xml, xmlElements, arr) {
  var i = 0;
  for (var arrValue of arr) {
    var node = xmlElements[i++];
    if (typeof arrValue === 'string') {
      node.appendChild(xml.createTextNode(arrValue));
    } else if (typeof arrValue === 'object') {
      for (var attrName in arrValue) {
        var attr = node.attributes.getNamedItem(attrName);
        if (!attr) {
          attr = xml.createAttribute(attrName);
          node.attributes.setNamedItem(attr);
        }

        attr.nodeValue = arrValue[attrName];
      }
    }
  }
}
