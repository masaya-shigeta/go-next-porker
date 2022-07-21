package controller

import (
	"strings"

	"porker/model"
	"porker/service"
	"porker/validation"

	"github.com/gin-gonic/gin"
)

type CheckRoleForm struct {
	Text string `form:"postInfo[text]"`
}

func CheckRole(c *gin.Context) {
	var request CheckRoleForm
	err := c.Bind(&request)
	if err != nil {
		c.JSON(500, map[string]interface{}{
			"text":   "",
			"errors": []string{"error"},
		})
		return
	}
	cardList := strings.Split(request.Text, " ")

	// validation
	errorMessages := validation.CheckTextValidation(cardList)
	if len(errorMessages) > 0 {
		c.JSON(400, map[string]interface{}{
			"text":   "",
			"errors": errorMessages,
		})
		return
	}

	// check
	checkResult := model.Rule{}
	if len(errorMessages) == 0 {
		checkResult = service.CheckRole(cardList)
	}

	c.JSON(200, map[string]interface{}{
		"text":   checkResult.Text,
		"errors": nil,
	})
}
