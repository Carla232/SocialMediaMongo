use socialmedia
db.postari.aggregate([
  {
    $group: {
      _id: "$utilizator.$id",
      numar_postari: { $sum: 1 }
    }
  }
])

db.utilizatori.aggregate([
  {
    $project: {
      _id: 0,
      numar_prieteni: { $size: "$prieteni" }
    }
  },
  {
    $group: {
      _id: null,
      total_prieteni: { $sum: "$numar_prieteni" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.utilizatori.aggregate([
  {
    $project: {
      _id: null,
      varsta: {
        $divide: [
          { $subtract: [ISODate("2023-11-16"), "$data_nastere"] },
          31536000000
        ]
      }
    }
  },
  {
    $group: {
      _id: 0,
      varsta_medie: { $avg: "$varsta" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.utilizatori.aggregate([
  {
    $group: {
      _id: null,
      data_nastere_minima: { $min: "$data_nastere" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.utilizatori.aggregate([
  {
    $group: {
      _id: null,
      data_nastere_maxima: { $max: "$data_nastere" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.postari.aggregate([
  {
    $lookup: {
      from: "utilizatori",
      localField: "utilizator.$id",
      foreignField: "_id",
      as: "utilizator_info"
    }
  },
  {
    $unwind: "$utilizator_info"
  },
  {
    $match: {
      "relevanta.etichete": "film"
    }
  },
  {
    $project: {
      _id: "$utilizator_info._id",
      varsta: {
        $divide: [
          { $subtract: [ISODate("2023-11-16"), "$utilizator_info.data_nastere"] },
          31536000000
        ]
      }
    }
  },
  {
    $group: {
      _id: null,
      varsta_medie: { $avg: "$varsta" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.comentarii.aggregate([
  {
    $group: {
      _id: "$utilizator.$id",
      numar_comentarii: { $sum: 1 }
    }
  },
  {
    $sort: { numar_comentarii: -1 }
  },
  {
    $limit: 1
  }
])

db.postari.aggregate([
  {
    $unwind: "$relevanta.locatie"
  },
  {
    $group: {
      _id: "$relevanta.locatie",
      numar_postari: { $sum: 1 }
    },
  },
  {
    $sort: { numar_postari: -1 }
  }
])

db.utilizatori.aggregate([
  {
    $group: {
      _id: null,
      total_utilizatori: { $sum: 1 }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.utilizatori.aggregate([
  {
    $sort: { nume: 1 }
  }
])

db.postari.aggregate([
  {
    $sort: { data_ora_postarii: 1 }
  }
])

db.postari.aggregate([
  {
    $project: {
      numar_cuvinte: { $size: { $split: ["$text", " "] } }
    }
  },
  {
    $group: {
      _id: null,
      media_cuvinte: { $avg: "$numar_cuvinte" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.comentarii.aggregate([
  {
    $group: {
      _id: "$postare.$id",
      total_comentarii: { $sum: 1 }
    }
  }
])

db.comentarii.aggregate([
  {
    $sort: { data_comentariu: 1 }
  }
])

db.comentarii.aggregate([
  {
    $project: {
      numar_caractere: { $strLenCP: "$text" }
    }
  },
  {
    $group: {
      _id: null,
      media_caractere: { $avg: "$numar_caractere" }
    }
  },{
      $project:{
      _id:0
      }
  } 
])

db.postari.aggregate([
  {
    $unwind: "$reactie"
  },
  {
    $group: {
      _id: "$_id",
      reactiiTotale: { $sum: 1 },
      like: { $sum: { $cond: [{ $eq: ["$reactie.apreciere", "like"] }, 1, 0] } },
      inima: { $sum: { $cond: [{ $eq: ["$reactie.apreciere", "inima"] }, 1, 0] } }
    }
  }
]);

db.comentarii.aggregate([
  {
    $lookup: {
      from: "utilizatori",
      localField: "utilizator.$id",
      foreignField: "_id",
      as: "utilizator"
    }
  },
  {
    $unwind: "$utilizator"
  },
  {
    $project: {
      _id: 0,
      comentariu: "$text",
      utilizator: "$utilizator.nume"
    }
  }
])

db.postari.aggregate([
  {
    $lookup: {
      from: "utilizatori",
      localField: "utilizator.$id",
      foreignField: "_id",
      as: "utilizator"
    }
  },
  {
    $unwind: "$utilizator"
  },
  {
    $lookup: {
      from: "comentarii",
      localField: "_id",
      foreignField: "postare.$id",
      as: "comentarii"
    }
  },
  {
    $project: {
      _id: 1,
      text: 1,
      nume_utilizator: "$utilizator.nume",
      numar_comentarii: { $size: "$comentarii" }
    }
  }
])

