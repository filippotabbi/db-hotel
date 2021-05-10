<?php

// Includo la connessione al database
require './db.php';

header('Content-type: application/json');


    if (!empty($_GET) && $_GET['id']) {
      // Creo le variabili
      $id = $_GET['id'];
      $result = [];

      // Inserisco la query che mi prende tutti i dati da stanza dato un determinato id
      $stmt = $conn->prepare("SELECT * FROM stanze WHERE id = ?");
      // Sostituzione
      $stmt->bind_param("i", $id);

      $stmt->execute();

      $rows = $stmt->get_result();

      while ($row = $rows->fetch_assoc()) {
        $result[] = $row;
      }


      echo json_encode([
        "response" => $result
      ]);
    } else {
    // Inserisco la query che mi prende tutti i dati da stanza dato un determinato id
    $sql = "SELECT * FROM stanze";
    $rows = $conn->query($sql);
    $result = [];

    if ($rows && $rows->num_rows > 0) {
      while ($row = $rows->fetch_assoc()) {
        $result[] = $row;
      }
    }

    echo json_encode([
      "response" => $result,
    ]);
  }



 ?>
