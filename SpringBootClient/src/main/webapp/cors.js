/**
 * 
 */
GET: $(document).ready(
		function() {

			// GET REQUEST
			$("#serverDataBtn").click(function(event) {
				alert("Started From Client");
				ajaxGet();
			});

			// DO GET
			function ajaxGet() {
				$.ajax({
					url : "http://localhost:8080/access",
					success : function(result) {
						alert("From Server");
						$("#serverData").html(result);
					}
				});
			}
		})
