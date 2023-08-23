export default{
	email:()=>{
		return Email.send({
			Host : "smtp.gmail.com",
			Username : "prathamesh.nigade@parati.in",
			Password: "lfifwveumkyznsfc",
			To : 'pdnigade77@gmail.com',
			From : "prathamesh.nigade@parati.in",
			Subject : "This is the subject",
			Body : "And this is the body"
		}).then(
			message=>showAlert(message)
		);
	}
}