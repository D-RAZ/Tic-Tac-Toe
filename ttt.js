// Function called whenever user click on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking of Player X finsh
	// Checking for Player O starts, Is player O won or
	// not and after that disabled all the other fields
	else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
		b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
		b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
		b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
		b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Cpu won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking of Player O finsh
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
		|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
		(b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
		b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
		(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
		b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Its a Tie";
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check player response
// and put the value X accordingly and give the Cpu response

function myfunc_3() {
	
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		//SOWC
		if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b2").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b4").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "O")
		{
			if(!(document.getElementById("b2").disabled))
			{
				document.getElementById("b2").value = "O";
				document.getElementById("b2").disabled = true;
			}
			else if(!(document.getElementById("b4").disabled))
			{
				document.getElementById("b4").value = "O";
				document.getElementById("b4").disabled = true;
			}
			else if(!(document.getElementById("b6").disabled))
			{
				document.getElementById("b6").value = "O";
				document.getElementById("b6").disabled = true;
			}
			else if(!(document.getElementById("b8").disabled))
			{
				document.getElementById("b8").value = "O";
				document.getElementById("b8").disabled = true;
			}
		}
		else
		{
			if(!(document.getElementById("b3").disabled))
			{
				document.getElementById("b3").value = "O";
				document.getElementById("b3").disabled = true;
			}
			else if(!(document.getElementById("b7").disabled))
			{
				document.getElementById("b7").value = "O";
				document.getElementById("b7").disabled = true;
			}
			else if(!(document.getElementById("b9").disabled))
			{
				document.getElementById("b9").value = "O";
				document.getElementById("b9").disabled = true;
			}
		} 
		//EOSC

}

function myfunc_4() {

		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b8").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(!(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(!(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(!(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(!(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(!(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(!(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		//EOSC

}

function myfunc_5() {

		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b6").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "O")
		{
			if(!(document.getElementById("b2").disabled))
			{
				document.getElementById("b2").value = "O";
				document.getElementById("b2").disabled = true;
			}
			else if(!(document.getElementById("b4").disabled))
			{
				document.getElementById("b4").value = "O";
				document.getElementById("b4").disabled = true;
			}
			else if(!(document.getElementById("b6").disabled))
			{
				document.getElementById("b6").value = "O";
				document.getElementById("b6").disabled = true;
			}
			else if(!(document.getElementById("b8").disabled))
			{
				document.getElementById("b8").value = "O";
				document.getElementById("b8").disabled = true;
			}
		}
		else
		{
			if(!(document.getElementById("b1").disabled))
			{
				document.getElementById("b1").value = "O";
				document.getElementById("b1").disabled = true;
			}
			else if(!(document.getElementById("b7").disabled))
			{
				document.getElementById("b7").value = "O";
				document.getElementById("b7").disabled = true;
			}
			else if(!(document.getElementById("b9").disabled))
			{
				document.getElementById("b9").value = "O";
				document.getElementById("b9").disabled = true;
			}
		} 
		//EOSC

}

function myfunc_6() {

		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b6").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(!(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(!(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(!(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(!(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(!(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(!(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		//EOSC

}

function myfunc_7() {

		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b4").value == "X" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b6").value == "X" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b2").value == "X" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b8").value == "X" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(!(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(!(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(!(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(!(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(!(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(!(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(!(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		//EOSC

}

function myfunc_8() {

		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b8").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b7").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b4").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(!(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(!(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(!(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(!(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(!(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(!(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		//EOSC

}

function myfunc_9() {

		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b8").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "O")
		{
			if(!(document.getElementById("b2").disabled))
			{
				document.getElementById("b2").value = "O";
				document.getElementById("b2").disabled = true;
			}
			else if(!(document.getElementById("b4").disabled))
			{
				document.getElementById("b4").value = "O";
				document.getElementById("b4").disabled = true;
			}
			else if(!(document.getElementById("b6").disabled))
			{
				document.getElementById("b6").value = "O";
				document.getElementById("b6").disabled = true;
			}
			else if(!(document.getElementById("b8").disabled))
			{
				document.getElementById("b8").value = "O";
				document.getElementById("b8").disabled = true;
			}
		}
		else
		{
			if(!(document.getElementById("b3").disabled))
			{
				document.getElementById("b3").value = "O";
				document.getElementById("b3").disabled = true;
			}
			else if(!(document.getElementById("b1").disabled))
			{
				document.getElementById("b1").value = "O";
				document.getElementById("b1").disabled = true;
			}
			else if(!(document.getElementById("b9").disabled))
			{
				document.getElementById("b9").value = "O";
				document.getElementById("b9").disabled = true;
			}
		} 
		//EOSC

}

function myfunc_10() {

		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b6").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b9").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(document.getElementById("b9").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b2").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(!(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(!(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(!(document.getElementById("b9").disabled))
		{
			document.getElementById("b9").value = "O";
			document.getElementById("b9").disabled = true;
		}
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(!(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(!(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(!(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		//EOSC

}

function myfunc_11() {

		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		//SOWC
		if(document.getElementById("b1").value == "O" && document.getElementById("b2").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b3").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b6").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b4").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b4").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b4").disabled))
		{
			document.getElementById("b4").value = "O";
			document.getElementById("b4").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b2").disabled))
		{
			document.getElementById("b2").value = "O";
			document.getElementById("b2").disabled = true;
		}
		else if(document.getElementById("b2").value == "O" && document.getElementById("b8").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b5").value == "O" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b3").value == "O" && document.getElementById("b7").value == "O" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOWC
		//SOTC
		else if(document.getElementById("b3").value == "X" && !(document.getElementById("b6").disabled))
		{
			document.getElementById("b6").value = "O";
			document.getElementById("b6").disabled = true;
		}
		else if(document.getElementById("b6").value == "X" && !(document.getElementById("b3").disabled))
		{
			document.getElementById("b3").value = "O";
			document.getElementById("b3").disabled = true;
		}
		else if(document.getElementById("b7").value == "X" && !(document.getElementById("b8").disabled))
		{
			document.getElementById("b8").value = "O";
			document.getElementById("b8").disabled = true;
		}
		else if(document.getElementById("b8").value == "X" && !(document.getElementById("b7").disabled))
		{
			document.getElementById("b7").value = "O";
			document.getElementById("b7").disabled = true;
		}
		else if(document.getElementById("b5").value == "X" && !(document.getElementById("b1").disabled))
		{
			document.getElementById("b1").value = "O";
			document.getElementById("b1").disabled = true;
		}
		else if(document.getElementById("b1").value == "X" && !(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		//EOTC
		//SOSC
		else if(!(document.getElementById("b5").disabled))
		{
			document.getElementById("b5").value = "O";
			document.getElementById("b5").disabled = true;
		}
		else if(document.getElementById("b5").value == "O")
		{
			if(!(document.getElementById("b2").disabled))
			{
				document.getElementById("b2").value = "O";
				document.getElementById("b2").disabled = true;
			}
			else if(!(document.getElementById("b4").disabled))
			{
				document.getElementById("b4").value = "O";
				document.getElementById("b4").disabled = true;
			}
			else if(!(document.getElementById("b6").disabled))
			{
				document.getElementById("b6").value = "O";
				document.getElementById("b6").disabled = true;
			}
			else if(!(document.getElementById("b8").disabled))
			{
				document.getElementById("b8").value = "O";
				document.getElementById("b8").disabled = true;
			}
		}
		else
		{
			if(!(document.getElementById("b3").disabled))
			{
				document.getElementById("b3").value = "O";
				document.getElementById("b3").disabled = true;
			}
			else if(!(document.getElementById("b7").disabled))
			{
				document.getElementById("b7").value = "O";
				document.getElementById("b7").disabled = true;
			}
			else if(!(document.getElementById("b1").disabled))
			{
				document.getElementById("b1").value = "O";
				document.getElementById("b1").disabled = true;
			}
		} 
		//EOSC

}
