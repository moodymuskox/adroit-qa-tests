# Issues found

## Issue 1: E-mail without top level domain is accepted at registration

### Summary

In the **browser version** of the app, during the registration process when the user has to enter a valid e-mail address, e-mail addresses without top level domain are accepted and registration is allowed.

### Environment

**Build**: Production

1. **macOS 13.4** (22F66)
    - Safari 16.5 (18615.2.9.11.4)
    - Google Chrome 117.0.5938.92

1. **iOS 17.1.2**
    - Safari 17
    - Google Chrome 119.0.6045.169

**Credentials:** "test@email" + valid phone number

### Repro steps
1. As a non-logged in user, access homepage: https://cleango.hu/
1. Go to the registration form on the homepage
1. Enter an e-mail address without top level domain to the e-mail field
1. Enter a valid phone number to the phone number field
1. Select register button
1. Observe that registration was successful

### Expected behaviour
Only full e-mail addresses should be accepted during registration.

### Actual behaviour
E-mail addresses without TLD are accepted during registration.

### Priority
Recommended priority is medium, since this issue can affect the core functionality of user registration and may lead to inaccurate or incomplete user data

### Severity
Recommended severity is high since this issue can lead to incomplete or incorrect user registrations, affecting communication, authentication, and data accuracy within the app

&nbsp;
&nbsp;
&nbsp;

## Issue 2: Language icon in the header of the page appears distorted

### Summary

In the **mobile browser** version of the app, the language icon in the header of the page appears distorted.

### Environment

**Build**: Production

1. **iOS 17.1.2**
    - Safari 17
    - Google Chrome 119.0.6045.169


### Repro steps
1. As a non-logged in user, access homepage: https://cleango.hu/
1. Observe the distorted language app icon in the header of the page

### Expected behaviour
The language icon should appear round, without distortion.

### Actual behaviour
The language icon in the header of the page appears distorted.

### Priority
Recommended priority is low, as this issue primarily affects the visual aspect and doesn't obstruct core functionalities.

### Severity
Recommended severity is low, because the icon affects how the app looks but doesn't stop users from using the primary functionalities.

### Attachments

#### Chrome

![ios](/attachments//Issue2_iOS_Chrome.PNG)

#### Safari

![chrome](/attachments/Issue2_iOS_Safari.PNG)
