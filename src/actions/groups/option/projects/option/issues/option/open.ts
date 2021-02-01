import { IssueOptions } from "../../../../../../../utils/interfaces"

// @description Open the issue
if (options.issues) {
	open(options.issues.html_url)
} else {
	open('https://gitlab.com')
}
