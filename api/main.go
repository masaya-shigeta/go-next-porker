package main

import (
	"porker/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.POST("/porker", controller.CheckRole)
	router.Run("localhost:4000")
}
