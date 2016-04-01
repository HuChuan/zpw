package com.zpw.util;

import java.security.MessageDigest;

public class MD5Util {

	/***
	 * MD5加码 生成32位md5码
	 */
	public static String MD5(String text) {
		char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
				'a', 'b', 'c', 'd', 'e', 'f' };
		String encodingStr = null;
		try {
			byte[] strTemp = text.getBytes();
			MessageDigest mdTemp = MessageDigest.getInstance("MD5");
			mdTemp.update(strTemp);
			byte[] md = mdTemp.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i < j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}
			encodingStr = new String(str);
		} catch (Exception e) {
		}
		return encodingStr;
	}
}