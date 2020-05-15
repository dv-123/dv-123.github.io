<!-- will bw used if a server is purchased for mailing services -->
<?php
//index.php
    $to = "bhaik.divyanshu007@gmail.com";
    $error = "";
    $name = "";
    $email = "";
    $subject = "";
    $message = "";

    function clean_text($string)
    {
        $string = trim(string);
        $string = stripslashes($string);
        $string = htmlspecialchars($string);
        return $string;
    }
    
    if(isset($_POST['submit']))
    {
        if(empty($_POST["name"]))
        {
            $error .= '<p><label class="text-danger">Please Enter Your Name</label></p>';
        }
        else
        {
            $name = clean_text($_POST["name"]);
            if(!preg_match("/^[a-zA-Z]*$/", $name))
            {
                $error .= '<p><label class="text-danger"> Only Letters Are Allowed</label></p>';
            }
        }
        
        if(empty($_POST["email"]))
        {
            $error .= '<p><label class="text-danger">Please Enter Your Email</label></p>';
        }
        else
        {
            $email = clean_text($_POST["email"]);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $error .= '<p><label class="text-danger"> Inavlid Email Format</label></p>';
            }
        }
        
        if(empty($_POST["subject"]))
        {
            $error .= '<p><label class="text-danger">Subject Is Requires</label></p>';
        }
        else
        {
            $subject = clean_text($_POST["subject"]);
        }
        
        if(empty($_POST["message"]))
        {
            $error .= '<p><label class="text-danger">Message Is Required</label></p>';
        }
        else
        {
            $message = clean_text($_POST["message"]);
        }

        if($error != "")
        {
            require 'assets/phpmailer/class.phpmailer.php';
            $mail = new PHPMailer;
            $mail->IsSMTP();
            $mail->Host = 'smtpout.secureserver.net';
            $mail->Port = '80';
            $mail->SMTPAuth = true;
            $mail->Username = "name";
            $mail->Password = "password";
            $mail->SMTPSecure = ';'
            $mail->From = $_POST["email"];
            $mail->FormName = $_POST["name"];
            $mail->AddAddress('bhaik.divyanshu007@gmail.com', 'Divyanshu');
            $mail->AddCC($_POST['email'], $_POST['name']);
            $mail->wordwrap = 50;
            $mail->IsHTML(true);
            $mail->Subject = $_POST["subject"];
            $mail->Body = $_POST["message"];
            if($mail->Send())
            {
                $error .= '<p><label class="test-success">Your Message is sent to Divyanshu as an Email</label></p>';
            }
            else
            {
                $error .= '<p><label class="text-danger">There is an Error in Sending the Email</label></p>';
            }
            //mail($to,$subject,$message,$email);
            $name='';
            $email='';
            $subject='';
            $message='';
        }
    }
?>